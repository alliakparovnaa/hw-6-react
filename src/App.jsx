import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatInput from "./components/ChatInput";
import UserInfo from "./components/UserInfo";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    const newMessage = {
      text: "text",
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };
  return (
    <div>
      <UserInfo />
      <Chat messages={messages} />
      <ChatInput onSend={addMessage} />
    </div>
  );
}

export default App;
