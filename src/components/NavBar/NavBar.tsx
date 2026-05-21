import NavBarElement from './NavBarElement'
import WhatsAppButton from './WhatsappButton'
import ContactDropdownNav from './ContactDropdown'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

export default function Navbar({ heroHeight = 0, forceScrolled = false }) {
   const [scrolled, setScrolled] = useState(forceScrolled)

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(forceScrolled || window.scrollY > heroHeight)
      }

      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [heroHeight, forceScrolled])
   return (
      <header
         className={`fixed top-0 left-0 w-full z-50 bg-transparent ${
            scrolled ? 'bg-white shadow-none' : 'bg-transparent shadow-none'
         }`}
      >
         <div className="flex items-center flex-shrink-0 pb-3">
            <div className="flex items-center flex-shrink-0 pl-4 pt-2">
               <svg
                  className="w-12 h-auto mr-1"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="4%"
                  viewBox="0 0 384 272"
                  enable-background="new 0 0 384 272"
               >
                  <path
                     fill="#ffa940"
                     opacity="1.000000"
                     stroke="none"
                     d=" M127.049217,253.380005 C125.567566,253.381805 124.553352,253.489746 123.571533,253.357422 C121.597160,253.091339 118.546417,254.250336 118.265450,251.231094 C118.033623,248.739975 120.851051,248.045746 122.849716,247.367554 C127.576553,245.763611 132.336044,244.244278 137.126129,242.840118 C179.398544,230.448364 219.552231,213.252533 256.568146,189.246704 C273.364014,178.354126 289.166138,166.086884 301.843079,150.301727 C306.892914,144.013763 311.015106,137.230881 313.116730,129.345673 C315.184448,121.587708 312.902679,115.118004 306.208282,110.648743 C297.063965,104.543884 286.519104,103.676369 276.034760,103.418831 C249.669586,102.771179 224.152222,108.303757 198.798187,114.765503 C195.411926,115.628525 192.040115,116.580040 188.613373,117.240326 C186.570892,117.633888 183.856827,118.521881 182.701523,116.195450 C181.431778,113.638634 184.164429,112.429337 185.781525,111.211670 C195.672943,103.763390 206.554031,98.043022 217.695557,92.690689 C242.506287,80.771774 268.535461,72.827843 295.733154,69.081650 C312.426697,66.782295 329.225708,66.405121 345.743195,71.255257 C369.803864,78.320312 379.301117,94.382751 373.609772,118.865257 C369.410645,136.928696 358.532501,150.996078 345.850739,163.720093 C324.301849,185.340714 298.546692,200.890762 271.188599,213.949265 C230.444366,233.397217 187.160019,244.376068 142.926422,252.086182 C137.871033,252.967361 132.726578,253.718872 127.049217,253.380005 z"
                  />
                  <path
                     fill="#0B2D5C"
                     opacity="1.000000"
                     stroke="none"
                     d=" M186.318130,54.189392 C206.886581,48.428040 227.157440,43.145157 247.750504,39.187107 C250.885117,38.584618 254.072922,38.432003 257.199493,38.933350 C261.539154,39.629215 262.580231,42.851196 259.542267,46.086456 C257.090973,48.696930 253.770218,50.036026 250.527481,51.304699 C236.889694,56.640259 223.137558,61.688175 209.551529,67.150391 C178.025482,79.825317 148.233658,95.663582 121.919685,117.364937 C110.995201,126.374451 100.904221,136.371155 93.895691,148.980804 C92.433197,151.612106 91.132736,154.285446 90.360352,157.212341 C87.844673,166.745331 90.427055,173.267258 98.884453,178.396774 C106.925529,183.273758 115.897278,184.993240 125.080124,185.662048 C156.192963,187.928055 186.375763,182.330536 216.296005,174.631653 C218.389801,174.092880 220.494217,173.576813 222.617752,173.178329 C224.136810,172.893265 225.828217,172.940445 226.598709,174.490005 C227.481171,176.264801 225.922165,177.303238 224.722992,178.078354 C219.970657,181.150208 215.274399,184.350067 210.308380,187.043396 C180.684189,203.110275 149.613373,215.258926 116.026192,219.717957 C95.312500,222.467880 74.533623,223.473633 54.494534,215.257233 C35.621078,207.518768 24.920786,190.650620 28.006287,173.136047 C30.125944,161.103989 35.065941,150.308105 42.435867,140.587494 C55.498699,123.358170 71.924583,109.858795 89.980606,98.305305 C119.889847,79.167290 152.009537,64.750366 186.318130,54.189392 z"
                  />
               </svg>

               <Link
                  to="/"
                  className={`whitespace-nowrap text-4xl font-bold transition-colors duration-300 ${
                     scrolled ? 'text-black' : 'text-white'
                  }`}
               >
                  soik<span className="text-[#ffa940]">.</span>solar
               </Link>
            </div>

            {/* CENTER NAV */}
            <div className="flex-1 flex justify-center pt-3">
               <nav className="bg-white rounded-3xl px-8 h-14 flex items-center">
                  <div className="flex items-center gap-8">
                     <NavBarElement text="Start" href="/" />
                     <NavBarElement text="Leistungen" href="/#/service" />
                     <NavBarElement text="Referenzen" href="/#/references" />
                     <NavBarElement text="Über uns" href="/#/about" />
                     <ContactDropdownNav />
                  </div>
               </nav>
            </div>

            {/* RIGHT */}
            <WhatsAppButton scrolled={scrolled} />
            <div className="flex-shrink-0 w-[180px]" />
         </div>
      </header>
   )
}
