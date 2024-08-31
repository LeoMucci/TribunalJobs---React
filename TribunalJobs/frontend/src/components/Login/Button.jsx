import React from 'react';

const Button = ({ children, ...rest }) => {
  return (
    <button {...rest} className="bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-700">
      {children}
    </button>
  );
};

export default Button;
