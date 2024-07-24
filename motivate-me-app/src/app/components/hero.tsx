import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative flex flex-col h-screen justify-center items-center bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Animated background effect */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a2c2e9" />
              <stop offset="100%" stopColor="#ff9a9e" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-gradient)" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-black bg-opacity-40"></div> {/* Darker overlay */}
        </div>
      </div>
      <div className="relative flex flex-col items-center text-center z-10">
        <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src="/sarge.png"
            width={150}
            height={150}
            alt="Picture of Sarge"
            className="object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
          <span className="block mb-2">Get Your Sh*t Together</span>
          <span className="bg-gradient-to-r from-indigo-500 via-pink-600 to-yellow-500 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl">
            Before Sarge Loses It!
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 sm:mt-5 md:mt-5 leading-relaxed">
          Transform your procrastination into productivity – with a generous dose of humor and Sarge’s delightful roasts.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow-lg">
            <a
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold px-8 py-3 text-base transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
              href="#"
            >
              Get started for free 🚀
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
