import React, { useState } from 'react';
import { X } from 'lucide-react';

interface WhatsAppChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
}

const WhatsAppChatPopup: React.FC<WhatsAppChatPopupProps> = ({ isOpen, onClose, whatsappNumber }) => {
  const [message, setMessage] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleStartChat = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/7066297794?text=${encodedMessage}`;
    window.open(url, '_blank');
    onClose(); // Close the popup after opening WhatsApp
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 w-72 transition-all duration-300 transform origin-bottom-right">
      <div className="bg-white rounded-lg shadow-xl p-5 relative border border-gray-200">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close chat window"
        >
          <X size={18} />
        </button>

        {/* Bubble tail */}
        <div className="absolute bottom-0 right-4 -mb-3 w-6 h-6 bg-white border-b border-r border-gray-200 transform rotate-45"></div>

        <div className="flex items-center mb-4">
          {/* Agent Icon/Avatar - Using a simple colored circle for now */}
          <div className="w-9 h-9 bg-orange-500 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold">PV</div>
          <h4 className="font-heading text-lg font-bold text-orange-600">PolicyVista</h4>
        </div>

        <p className="text-gray-700 text-sm mb-4">Hi there, I am here to help you out</p>

        <textarea
          className="w-full p-3 border border-gray-300 rounded-md mb-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200 resize-none"
          rows={4}
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-heading font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-200 flex items-center justify-center"
          onClick={handleStartChat}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 mr-2"><path d="M380.9 97.1C339.4 55.6 283.9 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L1 480l116-30.3c29.5 16.8 63 26.6 98.4 26.6 122.4 0 222-99.6 222-222 0-60-23.5-115.5-64.9-157zm-120.8 183.1c-3.1 1.5-18.5 9.1-21.7 9.1-3.2 0-6.4-1.2-9-3.7-2.6-2.5-9.5-11.7-12.9-15.6-3.4-3.9-2.7-3.4-5.1-6-2.5-2.5-11-14.2-13.4-19.7-2.4-5.4-4.9-4.5-9-4.6s-7.9-1.1-12.1-1.1c-4.2 0-10.9 1.6-16.6 8.2-5.7 6.7-21.6 21.2-21.6 51.7 0 30.6 22 59.9 25.3 64.1 3.3 4.2 41 65.7 99.1 91.5 38.2 16.9 68.6 26.6 91.3 33.3 22.7 6.7 43 5.7 58.8 3.5 15.8-2.3 48.5-19.7 55.1-38.8 6.6-19.1 6.6-35.4 4.6-38.8-2-3.3-7.3-5.3-15.5-9.2-8.1-3.8-48.5-18.9-56.6-21.9z"/></svg>
          Start chat
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChatPopup; 