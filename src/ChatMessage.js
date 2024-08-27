import React from 'react';

const ChatMessage = ({ sender, text }) => (
    <div className={`chat-message ${sender}`}>
        <div className="message-text">{text}</div>
    </div>
);

export default ChatMessage;
