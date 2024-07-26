import styled, {keyframes} from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  max-width: 400px;
`;

const Flex = styled.div<{direction?: 'row' | 'column'}>`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'column')};
`;

const ChatTitle = styled.div`
  background-color: white;
  color: grey;
  padding: 10px;
  text-align: center;
  position: relative;
`;

const IconsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  gap: 10px;
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #f1f1f1;
  overflow-y: auto;
  position: relative;
`;

const BlueCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #0044ff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: white;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  color: grey;
`;

const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #0044ff;
  font-size: 20px;
  margin-left: 10px;
  outline: none;

  &:hover {
    color: #0033cc;
  }

  &:active {
    color: #002299;
  }
`;

const ImageButton = styled.label`
  background: none;
  border: none;
  cursor: pointer;
  color: #0044ff;
  font-size: 20px;
  margin-left: 10px;
  outline: none;

  &:hover {
    color: #0033cc;
  }

  &:active {
    color: #002299;
  }

  input {
    display: none;
  }
`;

const StyledButton = styled.button<{disabled: boolean}>`
  background-color: #0044ff;
  color: white;
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: #0033cc;
  }

  &:active {
    background-color: #002299;
  }
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #0044ff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spinner} 1s linear infinite;
  margin-left: 10px;
`;

const Message = styled.div<{sentbyuser: boolean; maxwidth?: string}>`
  background-color: ${props => (props.sentbyuser ? '#0044ff' : 'white')};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  color: ${props => (props.sentbyuser ? 'white' : 'grey')};
  justify-content: ${props => (props.sentbyuser ? 'flex-end' : 'flex-start')};
  max-width: ${props => (props.maxwidth ? props.maxwidth : '80%')};
  display: flex;
`;

const Text = styled.div`
  color: grey;
  font-size: 11px;
`;
export {
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
};
