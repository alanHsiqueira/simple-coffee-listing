import React from 'react';

type ButtonProps = {
  children: React.ReactNode; 
}

const Button = ({children}: ButtonProps ) => {
  return (
    <button className='bg-[#6F757C] text-[#FEF7EE] rounded-xl px-4 py-2 hover:bg-[#1B1D1F] transition-colors duration-300'>
      {children}
    </button>
  )
}

export default Button
