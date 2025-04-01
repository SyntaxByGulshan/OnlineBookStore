import React from 'react';

const Button = ({ onClick, children, variant, className }) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none";
  const variantStyle = variant === "destructive" ? "bg-red-500 text-white" : "bg-blue-500 text-white";
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
