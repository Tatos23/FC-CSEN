import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-green-500 border-b border-green-500 ">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="flex h-20 items-center justify-between">
        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            
          <a className="flex flex-shrink-0 items-center mr-4" href='/'>
            <img className="h-10 w-auto" src="logo2.png" alt="Herzensbrücke"/>
            <span className="hidden md:block text-white text-2xl font-bold ml-2">Herzensbrücke </span >
          </a>
          
          <div className="md:ml-auto">
            <div className="flex space-x-4">
              <a href='/donations'className='text-white hover:hover:text-blue-600 rounded-md px-3 py-2'>Donations</a>
              <a href='/notifications' className='text-white hover:hover:text-blue-600 rounded-md px-3 py-2'>Notifications</a>
              <a href='/history'className='text-white hover:hover:text-blue-600 rounded-md px-3 py-2'>History</a>
              <a href='/account' className='text-white hover:hover:text-blue-600 rounded-md px-3 py-2'>Account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar