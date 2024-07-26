import {useState} from 'react';
import {client} from '../../config/api';

type typeOfMessage = {
  message: string;
  isSentByUser: boolean;
  timeSent?: string;
};

const initialMessages: typeOfMessage[] = [
  {
    message: 'Hello Jeff',
    isSentByUser: false
  },
  {
    message:
      'Welcome to LiveChatwas made with love. Pick a topic from the list or type down a question!',
    isSentByUser: false
  }
];

const useChat = () => {
  const [messages, setMessages] = useState<typeOfMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<typeOfMessage>({
    message: '',
    isSentByUser: false
  });
  const [sessionId, setSessionId] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatStartTime, setChatStartTime] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (newMessage.message.trim() !== '' && sessionId) {
      setIsLoading(true);
      try {
        const res = await client.post<{
          messages: string[];
        }>(
          '/message',
          {message: newMessage.message},
          {headers: {'X-Session-Id': sessionId}}
        );

        const messageRes = res.data.messages.map(message => ({
          message: message,
          isSentByUser: false
        }));

        const newMessageWithDate = {
          message: newMessage.message,
          isSentByUser: true,
          timeSent: new Date().toLocaleTimeString()
        };

        setMessages([...messages, newMessageWithDate, ...messageRes]);
        setNewMessage({
          message: '',
          isSentByUser: false
        });
      } catch (error) {
        console.log(error, 'error in handleSendMessage');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSendImage = async (image: string) => {
    if (sessionId) {
      setIsLoading(true);
      try {
        const res = await client.post<{
          messages: string[];
        }>('/image', {image}, {headers: {'X-Session-Id': sessionId}});

        const messageRes = res.data.messages.map(message => ({
          message: message,
          isSentByUser: false
        }));
        setMessages([...messages, ...messageRes]);
      } catch (error) {
        console.log(error, 'error in handleSendImage');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleSendImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const initChatHandler = async () => {
    setIsLoading(true);
    try {
      const res = await client.get('/init');
      setSessionId(res.data.sessionId);
      setChatStartTime(new Date().toLocaleTimeString());
    } catch (error) {
      console.log(error, 'error in initChatHandler');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    newMessage,
    setNewMessage,
    sessionId,
    isLoading,
    handleSendMessage,
    handleImageChange,
    handleKeyPress,
    initChatHandler,
    chatStartTime
  };
};

export default useChat;
