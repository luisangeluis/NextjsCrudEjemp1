import React from 'react'

const Input = ({ id, type, onChange, placeholder,name }) => {
  return (
    <input 
      name={name}
      className={`bg-gray-400 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5`} 
      id={id} type={type} onChange={onChange} placeholder={placeholder} 
    />
  )
}

export default Input;