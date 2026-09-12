import Logo from '../assets/logo-text.png'

const Nav = () => {
  return (
    <nav className="flex items-center container mx-auto justify-between px-8 py-4 border-b border-gray-200">
      
      <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />
   

      
      <ul className="flex gap-8 text-gray-600 font-medium">
        <li className="text-pink-600">Home</li>
        <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
        <li className="hover:text-pink-600 cursor-pointer">Projects</li>
        <li className="hover:text-pink-600 cursor-pointer">About</li>
        <li className="hover:text-pink-600 cursor-pointer">Contact</li>
      </ul>
      

      <div className="flex items-center gap-6">
        <span className="text-gray-700 font-medium cursor-pointer">Sign In</span>
        <button className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700">
          Sign Up
        </button>
      </div>

    </nav>
  )
}

export default Nav