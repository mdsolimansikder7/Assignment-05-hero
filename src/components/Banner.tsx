import BannerImg from '../assets/banner-stack.png'

export const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center"
    >
      {/* Left side: text content */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#technologies"
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Explore Technologies
          </a>
          <a
          
            href="#about"
            className="border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-center"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right side: image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={BannerImg}
          alt="Layered isometric illustration of a development stack"
          className="w-56 sm:w-72 md:w-96 h-auto"
        />
      </div>
    </section>
  )
}

export default Banner