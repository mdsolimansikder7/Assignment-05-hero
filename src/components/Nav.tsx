import { useState } from 'react'
import Logo from '../assets/logo-text.png'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 gap-4">
        {/* Left: hamburger + logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl text-gray-700 leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
          <img src={Logo} alt="Dev Stack" className="h-7 sm:h-8 w-auto" />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
          <li className="hover:text-pink-600 cursor-pointer">Projects</li>
          <li className="hover:text-pink-600 cursor-pointer">About</li>
          <li className="hover:text-pink-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right: Sign In + Sign Up - always visible */}
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="text-gray-700 font-medium cursor-pointer text-sm sm:text-base">
            Sign In
          </span>
          <button className="bg-pink-600 text-white px-4 sm:px-5 py-2 rounded-full font-medium hover:bg-pink-700 text-sm sm:text-base">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 px-4 py-4 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li className="text-pink-600 cursor-pointer">Home</li>
            <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
            <li className="hover:text-pink-600 cursor-pointer">Projects</li>
            <li className="hover:text-pink-600 cursor-pointer">About</li>
            <li className="hover:text-pink-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Nav