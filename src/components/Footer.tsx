import logo from "../assets/logo-text.png"

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          <p className="mt-4 text-gray-500 text-sm max-w-xs">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm text-gray-700 font-medium">
            <a href="#github" className="hover:text-pink-500">GitHub</a>
            <a href="#twitter" className="hover:text-pink-500">Twitter</a>
            <a href="#linkedin" className="hover:text-pink-500">LinkedIn</a>
          </div>
        </div>


        <div>
          <h4 className="font-semibold text-gray-900 text-sm tracking-wide">PRODUCT</h4>
          <ul className="mt-4 space-y-3 text-gray-500 text-sm">
            <li><a href="#home" className="hover:text-pink-500">Home</a></li>
            <li><a href="#technologies" className="hover:text-pink-500">Technologies</a></li>
            <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold text-gray-900 text-sm tracking-wide">COMPANY</h4>
          <ul className="mt-4 space-y-3 text-gray-500 text-sm">
            <li><a href="#about" className="hover:text-pink-500">About</a></li>
            <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
            <li><a href="#careers" className="hover:text-pink-500">Careers</a></li>
          </ul>
        </div>

   
        <div>
          <h4 className="font-semibold text-gray-900 text-sm tracking-wide">LEGAL</h4>
          <ul className="mt-4 space-y-3 text-gray-500 text-sm">
            <li><a href="#privacy" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-pink-500">Terms of Service</a></li>
          </ul>
        </div>
      </div>


      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-pink-500">Privacy</a>
            <a href="#terms" className="hover:text-pink-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer