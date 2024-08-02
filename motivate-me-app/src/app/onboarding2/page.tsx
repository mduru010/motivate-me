import Link from 'next/link';

const OnboardingPage2 = () => {
  return (
    <div className="relative flex flex-col h-screen justify-center items-center bg-gradient-to-r from-green-300 via-yellow-200 to-orange-300 overflow-hidden">
      <div className="absolute inset-0 -z-10">
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
          <div className="w-full h-full bg-black bg-opacity-40"></div>
        </div>
      </div>
      <div className="relative flex flex-col items-center text-center z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
          Step 2: Choose Your Habits
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-xl text-white/90 sm:mt-5 md:mt-5 leading-relaxed drop-shadow-xl">
          Select the habits you want to focus on:
        </p>
        <ul className="text-left mb-6 text-white">
          <li><input type="checkbox" className="mr-2" /> Meditation</li>
          <li><input type="checkbox" className="mr-2" /> Journaling</li>
          <li><input type="checkbox" className="mr-2" /> Exercise</li>
          <li><input type="checkbox" className="mr-2" /> Healthier Eating</li>
          <li><input type="checkbox" className="mr-2" /> Personal Goals</li>
        </ul>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div className="rounded-md shadow-lg">
            <Link href="/dashboard">
              <button className="flex w-full items-center justify-center rounded-md border border-none bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold px-8 py-3 text-base transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
                Finish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage2;

