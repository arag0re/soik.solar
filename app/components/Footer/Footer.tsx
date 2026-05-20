import { Link } from 'react-router'
import WhatsAppButton from '../Navbar/WhatsappButton'
import { useEffect, useState } from 'react'

export default function Footer({ heroHeight = 0 }) {
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > heroHeight)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [heroHeight])
   return (
      <footer className="bg-[#0B2D5C] text-white pt-16 pb-10 mt-20">
         <div className="max-w-6xl mx-auto px-6">
            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row justify-between gap-12">
               {/* BRAND */}
               <div className="max-w-sm">
                  <h2 className="text-3xl font-bold">
                     soik<span className="text-[#ffa940]">.</span>solar
                  </h2>
                  <p className="mt-4 text-white/70 leading-relaxed">
                     Nachhaltige Energielösungen für eine sonnige Zukunft.
                     Planung, Installation und Service aus einer Hand.
                  </p>
               </div>

               {/* NAV LINKS */}
               <div className="flex gap-16">
                  <div className="flex flex-col gap-3">
                     <h3 className="font-semibold mb-2 text-white">
                        Navigation
                     </h3>
                     <a
                        href="#produkte"
                        className="text-white/70 hover:text-white transition"
                     >
                        Produkte
                     </a>
                     <a
                        href="#service"
                        className="text-white/70 hover:text-white transition"
                     >
                        Service
                     </a>
                     <a
                        href="#magazin"
                        className="text-white/70 hover:text-white transition"
                     >
                        Magazin
                     </a>
                     <a
                        href="#uber-uns"
                        className="text-white/70 hover:text-white transition"
                     >
                        Über uns
                     </a>
                  </div>

                  <div className="flex flex-col gap-3">
                     <h3 className="font-semibold mb-2 text-white">Kontakt</h3>
                     <a
                        href="#kontakt"
                        className="text-white/70 hover:text-white transition"
                     >
                        Kontaktformular
                     </a>
                     <a
                        href="mailto:info@soik.solar"
                        className="text-white/70 hover:text-white transition"
                     >
                        E-Mail
                     </a>
                     <a
                        href="tel:+490000000000"
                        className="text-white/70 hover:text-white transition"
                     >
                        Telefon
                     </a>
                  </div>
               </div>

               {/* CTA */}
               <div className="flex flex-col items-start gap-4">
                  <h3 className="font-semibold">Schnell Kontakt</h3>
                  <WhatsAppButton scrolled={scrolled} />
               </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
               <p>
                  © {new Date().getFullYear()} soik.solar. Alle Rechte
                  vorbehalten.
               </p>

               <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="/imprint" className="hover:text-white transition">
                     Impressum
                  </a>
                  <a href="/privacy" className="hover:text-white transition">
                     Datenschutzerklärung
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}
