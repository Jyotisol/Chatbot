import React, { useState } from 'react';
import axios from 'axios';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const handleUserMessage = async (message) => {
        const newMessages = [...messages, { sender: 'user', text: message }];
        setMessages(newMessages);

        try {
            const response = await axios.post('http://localhost:5000/api/chat', { message });
            setMessages([...newMessages, { sender: 'bot', text: response.data.response }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages([...newMessages, { sender: 'bot', text: "Error getting response." }]);
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} sender={msg.sender} text={msg.text} />
                ))}
            </div>
            <ChatInput onSend={handleUserMessage} />
        </div>
    );
};

export default Chatbot;
