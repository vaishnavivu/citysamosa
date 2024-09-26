import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; 

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("I want to get a franchisee");
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const closeChat = () => {
    setIsOpen(false);
  };
  
  const sendMessage = () => {
    const whatsappUrl = `https://wa.me/7304454574?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  
  return (
    <div className="whatsapp-chat-container">
      <button 
        className="whatsapp-icon" 
        onClick={toggleChat} 
        aria-label="Open WhatsApp chat"
      >
        <FaWhatsapp size={30} />
      </button>
      
      {isOpen && (
        <div className="chat-box" role="dialog" aria-labelledby="chat-title" aria-modal="true">
          <h2 id="chat-title" className="visually-hidden">WhatsApp Chat</h2>
          
          <button 
            className="close-button" 
            onClick={closeChat} 
            aria-label="Close chat"
          >
            <FaTimes size={20} />
          </button>
          
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
            aria-label="Message input"
          />
          
          <button 
            className="send-button" 
            onClick={sendMessage} 
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
