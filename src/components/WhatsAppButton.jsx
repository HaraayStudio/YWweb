// src/components/WhatsAppButton/WhatsAppButton.jsx
import React, { useState } from "react";
import "./WhatsAppButton.scss";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "919922680555";
  const message = "Hello! ";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="wa-float">
      <div className={`wa-tooltip ${hovered ? "wa-tooltip--visible" : ""}`}>
        Chat with us on WhatsApp 👋
      </div>
      <a
        className="wa-btn"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
          <path
            fill="#fff"
            d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
          />
          <path
            fill="#25D366"
            d="M24 6.4C14.3 6.4 6.4 14.3 6.4 24c0 3.4 1 6.6 2.6 9.3L7 41l7.9-2c2.6 1.4 5.6 2.2 8.7 2.2 9.7 0 17.6-7.9 17.6-17.6S33.7 6.4 24 6.4z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M19.2 15.4c-.4-.9-.9-.9-1.3-.9h-1.1c-.4 0-1 .1-1.5.7-.5.5-2 2-2 4.8s2 5.6 2.3 6c.3.3 4 6.3 9.8 8.6 1.4.6 2.4.9 3.2 1.1 1.4.4 2.6.3 3.6.2 1.1-.2 3.4-1.4 3.9-2.7.4-1.3.4-2.5.3-2.7-.1-.2-.5-.4-1-.6l-3.5-1.7c-.5-.3-1-.3-1.4.3l-1.4 1.7c-.3.3-.6.4-.9.2-1.2-.6-2.4-1.3-3.3-2.3-.8-.9-1.5-2-2-3.1-.2-.4 0-.7.2-.9l.9-1.1c.2-.3.3-.7.1-1l-1.6-3.7z"
          />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
