import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <header className="flex bg-gray-800 text-white px-28 py-5">
        <h1 className="font-black text-lg">Task app</h1>
        <div className="flex-grow text-right">

        <button className='bg-green-300 px-3 py-2'>Add Task</button>
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout