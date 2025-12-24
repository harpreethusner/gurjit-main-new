import React, { useEffect } from "react";

const Toast = ({ show, duration = 6000, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    show && (
      <div className="flex flex-col font-bold fixed bottom-12 left-180 transform -translate-x-1/2 bg-black text-white px-10 py-4 rounded shadow-lg animate-fadeInOut z-50">
        {<span>Thank you For Contacting Us, </span>}
        {<span>We Will Get Back To U Soon!</span>}
      </div>
    )
  );
};

export default Toast;
