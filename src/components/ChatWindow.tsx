import React, { useEffect, useRef } from 'react';
import Loader from './Loader';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll when new messages are added

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <div key={msg.id} className={`message ${msg.sender}`}>
          <div>{msg.text}</div>
          <div className="message-timestamp">{formatTimestamp(msg.timestamp)}</div>
        </div>
      ))}
      {isLoading && <Loader />}
      <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
    </div>
  );
};

export default ChatWindow;