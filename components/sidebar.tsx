import { useState } from 'react';
import Image from 'next/image';

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        <a href="/" className="block p-4 text-white font-bold">
          <span className="sr-only">PosBox Home Page</span>
          <Image src="/posbox-logo.png" alt="Posbox Logo" width={150} height={29} />
        </a>

        {/* mobile menu button */}
        <button className="p-4 focus:outline-none focus:bg-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`bg-gray-800 text-gray-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform ${!isMenuOpen ? '-translate-x-full' : ''} md:relative md:translate-x-0 transition duration-200 ease-out`}>
        <a href="/" className="flex items-center space-x-2 px-4">
          <span className="sr-only">PosBox Home Page</span>
          <Image src="/posbox-logo.png" alt="Posbox Logo" width={150} height={29} />
        </a>

        {/* nav */}
        <nav>
          <a href="" className="block py-2.5 px-4 hover:bg-gray-700 rounded hover:text-gray-50 transition duration-200">Dashboard</a>
          <a href="" className="block py-2.5 px-4 hover:bg-gray-700 rounded hover:text-gray-50 transition duration-200">Sell</a>
          <a href="" className="block py-2.5 px-4 hover:bg-gray-700 rounded hover:text-gray-50 transition duration-200">Receipts</a>
          <a href="" className="block py-2.5 px-4 hover:bg-gray-700 rounded hover:text-gray-50 transition duration-200">Petty Cash</a>
          <a href="" className="block py-2.5 px-4 hover:bg-gray-700 rounded hover:text-gray-50 transition duration-200">Products</a>
          <a href="" className="block py-2.5 px-4 hover:bg-gray-700 rounded hover:text-gray-50 transition duration-200">Settings</a>
        </nav>
      </div>
    </>
  )
}

export default SideBar;