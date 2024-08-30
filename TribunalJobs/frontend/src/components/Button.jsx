import React from "react";

function Button({ text, className }) {
  return (
    <button
      className={`gap-2.5 self-stretch px-6 py-3.5 text-white whitespace-nowrap bg-sky-900 rounded-md max-md:px-5 ${className}`}
    >
      {text}
    </button>
  );
  
}

export default Button;