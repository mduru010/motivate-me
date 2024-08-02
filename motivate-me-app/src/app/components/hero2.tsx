import Image from 'next/image';
import Link from 'next/link';

export default function HeroTwo() {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16 relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
            <Image
              src="/sarge.png"
              width={150}
              height={150}
              alt="Picture of Sarge"
              className="object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
          <span className="block mb-2 text-black font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
  Get Your Sh*t Together
</span>

<span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold">
  Before Sarge Loses It!
</span>

<p className="text-lg text-black sm:mt-5 md:mt-5">
          Transform your procrastination into productivity – with a generous dose of humor and Sarge’s delightful roasts.
        </p>
        </h1>

        <div className=''>
    <ul className="mt-8 space-y-3 font-medium">
        <li className="flex items-center lg:col-span-1">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
                Build functional APIs with zero coding.
            </p>
        </li>
        <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
                Resources with permissions.
            </p>
        </li>
        <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
                Built in user authentication.
            </p>
        </li>
        <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
                Easy Integration with existing apps and tools.
            </p>
        </li>
        <li className="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p className="ml-3 leading-5 text-gray-600">
                Logs for your API calls.
            </p>
        </li>
    </ul>
</div>

        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
  <Link
    href="/dashboard"
    title=""
    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    role="button"
  >
    <img src="./google_logo.png" alt="Google Logo" className="w-5 h-5 mr-2" />
    Sync Your Calendar
  </Link>

  <a
    href="#"
    title=""
    className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
    role="button"
  >
    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    How It Works
  </a>
</div>

          <p className="mt-8 text-base text-gray-500 font-inter">60 Days free trial · No credit card required</p>
        </div>
      </div>

      <div className="pb-12 bg-white">
        <div className="relative">
          <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
          <div className="relative mx-auto">
            <div className="lg:max-w-6xl lg:mx-auto">
              <img className="transform scale-110" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
