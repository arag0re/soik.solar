import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer({ heroHeight = 0 }) {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > heroHeight)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [heroHeight])

   const socialClass =
      'w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300'

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

                  {/* SOCIALS */}
                  <div className="flex gap-3 mt-8">
                     <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClass}
                     >
                        <FaLinkedin size={20} />
                     </a>

                     <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClass}
                     >
                        <FaFacebook size={20} />
                     </a>

                     <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClass}
                     >
                        <FaInstagram size={20} />
                     </a>

                     <a
                        href="https://github.com/soik.solar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialClass}
                     >
                        <FaGithub size={20} />
                     </a>
                  </div>
               </div>

               {/* CONTACT */}
               <div className="flex flex-col gap-3">
                  <h3 className="font-semibold mb-2 text-white">Kontakt</h3>

                  <a
                     href="mailto:info@soik.solar"
                     className="text-white/70 hover:text-white transition"
                  >
                     info@soik.solar
                  </a>

                  <a
                     href="tel:004936774686151"
                     className="text-white/70 hover:text-white transition"
                  >
                     +49 (0) 3677 4686151
                  </a>

                  <a
                     href="tel:00491234567879"
                     className="text-white/70 hover:text-white transition"
                  >
                     +49 (0) 1234 567879
                  </a>

                  <a
                     href="#kontakt"
                     className="text-white/70 hover:text-white transition"
                  >
                     Kontaktformular
                  </a>

                  <a
                     href="https://wa.me/+15559879566"
                     className="text-white/70 hover:text-white transition"
                  >
                     Whatsapp Chatbot
                  </a>
               </div>

               {/* CTA */}
               <div className="flex flex-col items-start gap-4"></div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
               <p>
                  © {new Date().getFullYear()} soik.solar. Alle Rechte
                  vorbehalten.
               </p>

               <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="/#/imprint" className="hover:text-white transition">
                     Impressum
                  </a>

                  <a href="/#/privacy" className="hover:text-white transition">
                     Datenschutzerklärung
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}
