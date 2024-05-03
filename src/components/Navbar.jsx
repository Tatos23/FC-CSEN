import React from 'react'

const Navbar = () => {
  const linkClass = ({isActive})=> isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' 
  return (
    <nav className="bg-green-500 border-b border-green-500 ">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="flex h-20 items-center justify-between">
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
            
          <a className="flex flex-shrink-0 items-center mr-4" href='/'>
            <img
              className="h-10 w-auto"
              src="logo2.png"
              alt="Herzensbrücke"
            />
            <span className="hidden md:block text-white text-2xl font-bold ml-2"
              >Herzensbrücke </span >
          </a>
          
          <div className="md:ml-auto">
            <div className="flex space-x-10">
              <a
                href='/donations'
                className={linkClass}
                >Donations</a>
              <a
                href='/notifications'
                className={linkClass}
                >Notifications </a>
                <a
                href='/history'
                className={linkClass}
                >History </a>
                 <a
                href='/account'
                className={linkClass}
                >Account </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar