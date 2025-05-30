import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import WhatsAppChatPopup from './WhatsAppChatPopup';

const WhatsAppButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [springs, api] = useSpring(() => ({
    scale: 1,
    shadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: 160,
    height: 56,
    padding: 16,
    textOpacity: 1,
    borderRadius: 16,
    config: config.gentle,
  }));

  useEffect(() => {
    api.start({
      to: isPopupOpen
        ? {
            scale: 1,
            shadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: 56,
            height: 56,
            padding: 0,
            textOpacity: 0,
            borderRadius: 9999,
          }
        : {
            scale: 1,
            shadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: 160,
            height: 56,
            padding: 16,
            textOpacity: 1,
            borderRadius: 16,
          },
      config: config.gentle,
    });
  }, [isPopupOpen, api]);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <animated.a
        href="#"
        aria-label="Chat on WhatsApp"
        onClick={handleButtonClick}
        className={`
          fixed z-40 bg-blue-600 text-white cursor-pointer 
          flex items-center justify-center 
          bottom-6 right-6 
          transition-none
        `}
        style={{
          width: springs.width,
          height: springs.height,
          paddingLeft: springs.padding,
          paddingRight: springs.padding,
          boxShadow: springs.shadow,
          borderRadius: springs.borderRadius,
          transform: springs.scale.to(s => `scale(${s})`),
        }}
      >
        {/* WhatsApp Icon */}
        <svg height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
          <g>
            <path fill="#2CB742" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z" />
            <path fill="#FFFFFF" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z" />
          </g>
        </svg>

        {/* Button Text */}
        {!isPopupOpen && (
          <animated.span
            style={{
              opacity: springs.textOpacity,
              marginLeft: springs.textOpacity.to(o => (o > 0 ? '8px' : '0px')),
            }}
            className="ml-2 whitespace-nowrap"
          >
            Chat with us
          </animated.span>
        )}
      </animated.a>

      <WhatsAppChatPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        whatsappNumber="7066297794"
      />
    </>
  );
};

export default WhatsAppButton;
