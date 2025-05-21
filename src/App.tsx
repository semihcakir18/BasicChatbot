import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatWindow, { Message } from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './styles.css'; // Ensure this path is correct

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate initial bot message
  useEffect(() => {
    setMessages([
      { id: 'initial-ai-msg', text: 'Hello! I am LawBot. How can I assist you with legal information today?', sender: 'ai', timestamp: new Date() }
    ]);
  }, []);


  const handleSendMessage = async (text: string) => {
    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        text: `Okay, I've received your message: "${text}". I'm processing it. (This is a simulated response)`,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setIsLoading(false);
    }, 2000); // Simulate network delay
  };

  return (
    <div className="app">
      <Navbar />
      <ChatWindow messages={messages} isLoading={isLoading} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default App;