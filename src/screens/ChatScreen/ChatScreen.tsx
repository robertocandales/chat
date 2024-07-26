import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faTimes,
  faPaperPlane,
  faImage,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons';
import {
  ChatContainer,
  Flex,
  ChatTitle,
  IconsContainer,
  ChatBody,
  BlueCircle,
  Message,
  ChatInputContainer,
  ChatInput,
  SendButton,
  ImageButton,
  StyledButton,
  Spinner,
  Text
} from './ChatStyles';
import useChat from './useChat';
import {useRef, useEffect} from 'react';

const Chat = () => {
  const {
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
  } = useChat();

  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [messages]);

  return (
    <ChatContainer>
      <ChatTitle>
        Chat with us!
        <IconsContainer>
          <FontAwesomeIcon icon={faMinus} />
          <FontAwesomeIcon icon={faTimes} />
        </IconsContainer>
      </ChatTitle>
      <ChatBody style={{paddingTop: '20px'}}>
        {!sessionId ? (
          <Message
            maxwidth="100%"
            style={{paddingTop: '20px'}}
            sentbyuser={false}
          >
            <BlueCircle />
            <Flex style={{paddingTop: '40px'}}>
              Hello Jeff, good to see you here! By pressing the "Start chat"
              button you agree to have your personal data processed as described
              in our privacy Policy
              <StyledButton
                disabled={isLoading}
                onClick={initChatHandler}
                style={{marginTop: '20px'}}
              >
                {isLoading ? <Spinner /> : 'Start chat'}
              </StyledButton>
            </Flex>
          </Message>
        ) : (
          <Flex>
            {chatStartTime && (
              <Flex
                direction="row"
                style={{
                  gap: '5px',
                  color: 'blue'
                }}
              >
                <FontAwesomeIcon icon={faCommentDots} />
                <Text>Live chat {chatStartTime}</Text>
              </Flex>
            )}

            {messages.map((item, index) => (
              <Flex
                key={index}
                style={{
                  alignItems: item.isSentByUser ? 'flex-end' : 'flex-start'
                }}
              >
                {item.isSentByUser && (
                  <Flex
                    direction="row"
                    style={{
                      gap: '5px',
                      color: 'blue'
                    }}
                  >
                    <Text>visitor {item.timeSent}</Text>
                  </Flex>
                )}

                <Message
                  ref={index === messages.length - 1 ? lastMessageRef : null} // Attach ref here
                  sentbyuser={item.isSentByUser}
                >
                  {item.message}
                </Message>
                {item.isSentByUser && (
                  <Flex
                    direction="row"
                    style={{
                      gap: '5px',
                      color: 'blue'
                    }}
                  >
                    <Text>read </Text>
                  </Flex>
                )}
              </Flex>
            ))}
          </Flex>
        )}
      </ChatBody>
      {!!sessionId && (
        <ChatInputContainer>
          <ChatInput
            type="text"
            value={newMessage.message}
            onChange={e =>
              setNewMessage({message: e.target.value, isSentByUser: true})
            }
            onKeyPress={handleKeyPress}
            placeholder="Write a message..."
            disabled={isLoading}
          />
          <SendButton onClick={handleSendMessage} disabled={isLoading}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </SendButton>
          <ImageButton>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <FontAwesomeIcon icon={faImage} />
          </ImageButton>
        </ChatInputContainer>
      )}
    </ChatContainer>
  );
};

export default Chat;
