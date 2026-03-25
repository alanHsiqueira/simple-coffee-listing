import React from 'react';

type ButtonProps = {
  children: React.ReactNode; 
  onClick: () => void;
  active?: boolean; 
}

const Button = ({children, onClick, active}: ButtonProps ) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg text-sm text-[#FEF7EE] cursor-pointer transition-colors ${active ? 'bg-[#6F757C]' : 'bg-transparent hover:bg-[#4D5562]/50'}`}>
      {children}
    </button>
  )
}

export default Button
