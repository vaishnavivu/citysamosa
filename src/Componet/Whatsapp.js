// WhatsAppChat.js
import React, { useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("I want to get a more information about franchisee");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    const whatsappUrl = `https://wa.me/9762747757?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-chat-container">
      <button className="whatsapp-icon" onClick={toggleChat}>
        <RiWhatsappFill size={30} />
      </button>
      {isOpen && (
        <div className="chat-box">
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

export default Whatsapp;
