import React from 'react'
import ChatItem from './ChatItem'

const Chat = ({ messages }) => {
  return (
    <div >
    {messages.map((item) => (
      <ChatItem text={item.text} time={item.time} />
    ))}
  </div>
  )
}

export default Chat
