import React, { useState } from 'react'

const ChatInput = ({ onSend }) => {
    const [text, setText] = useState("");

    const handleSend = () => {
      if (text === "") return;
      onSend(text);
      setText("");
    };
  
  return (
    <div >
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Напишите сообщение..."
    />
    {text !== "" && <button onClick={handleSend}>Отправить</button>}
  </div>
  )
}

export default ChatInput
