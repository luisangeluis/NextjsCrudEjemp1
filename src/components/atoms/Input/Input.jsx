import React from 'react'

const Input = ({ id, type = "text", onChange, placeholder }) => {
  return (
    <input className={`bg-gray-400`} id={id} type={type} onChange={onChange} placeholder={placeholder} />
  )
}

export default Input;