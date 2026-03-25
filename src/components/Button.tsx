import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
};

const Button = ({ children, onClick, active }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 rounded-lg text-sm text-[#FEF7EE] cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6F757C] ${active ? 'bg-[#6F757C]' : 'bg-transparent hover:bg-[#4D5562]/50'}`}
    >
      {children}
    </button>
  );
};

export default Button;
