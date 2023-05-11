import React from 'react'

const TextArea = ({ name, onChange }) => {
  return (
    <textarea
      name={name}
      onChange={onChange}
      className={`bg-gray-400 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5`}
    ></textarea>
  )
}

export default TextArea