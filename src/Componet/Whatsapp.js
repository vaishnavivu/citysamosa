// WhatsAppChat.js
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Import close (cross) icon
 // Custom CSS file for styling

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
    const whatsappUrl = `https://wa.me/7304454573?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-chat-container">
      <button className="whatsapp-icon" onClick={toggleChat}>
        <FaWhatsapp size={30} />
      </button>
      {isOpen && (
        <div className="chat-box">
          <button className="close-button" onClick={closeChat}>
            <FaTimes size={20} />
          </button>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
          />
          <button className="send-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
