import { KeyboardEvent, useState } from "react";
import { useChat } from "../contexts/ChatContext";

type Props = {
  name: string;
}

function ChatInput({ name }: Props) {
  const chatCtx = useChat();
  const [textInput, setTextInput] = useState('');

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() === 'enter') {
      if (textInput.trim() !== '') {
        chatCtx?.addMessage(name, textInput.trim());
        setTextInput('');
      }
    }
  }

  return (
    <>
      <input
        className="w-full bg-transparent text-white text-md outline-none"
        placeholder={`${name}, digite uma mensagem (e aperte enter)`}
        value={textInput}
        onChange={e => e.target.value}
        onKeyUp={handleKeyUpAction}
      />
    </>
  )
}

export default ChatInput
