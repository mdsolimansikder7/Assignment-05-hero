import { useState } from 'react'
import Logo from '../assets/logo-text.png'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">Projects</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop right side buttons */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-gray-700 font-medium cursor-pointer">Sign In</span>
          <button className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700">
            Sign Up
          </button>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li className="text-pink-600 cursor-pointer">Home</li>
            <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
            <li className="hover:text-pink-600 cursor-pointer">Projects</li>
            <li className="hover:text-pink-600 cursor-pointer">About</li>
            <li className="hover:text-pink-600 cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col gap-3 pt-2 border-t border-gray-200">
            <span className="text-gray-700 font-medium cursor-pointer">Sign In</span>
            <button className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav