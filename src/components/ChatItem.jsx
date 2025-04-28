import React from "react";

const ChatItem = ({ text, time }) => {
  return (
    <div>
      <p>{text}</p> 
      <p>({time})</p>
    </div>
  );
};

export default ChatItem;
