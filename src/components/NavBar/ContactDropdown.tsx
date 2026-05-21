import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Send, Mail } from 'lucide-react'
import NavBarElement from './NavBarElement'

export default function ContactDropdownNav() {
   const [open, setOpen] = useState(false)
   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

   const handleEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setOpen(true)
   }

   const handleLeave = () => {
      timeoutRef.current = setTimeout(() => setOpen(false), 150)
   }

   const item =
      'relative group flex items-center justify-between w-full px-4 py-2 text-black font-medium hover:bg-gray-100'

   return (
      <div
         className="relative"
         onMouseEnter={handleEnter}
         onMouseLeave={handleLeave}
      >
         {/* TRIGGER */}
         <NavBarElement text="Kontakt" href="#" />
         {/* DROPDOWN */}
         {open && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 bg-white shadow-xl rounded-xl overflow-hidden z-50 py-2 mt-5">
               {/* CHAT */}
               <motion.a
                  href="https://wa.me/+15559879566"
                  className={item}
                  initial="rest"
                  whileHover="hover"
               >
                  <span className="relative">
                     Chatbot
                     {/* UNDERLINE */}
                     <motion.span
                        className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
                        variants={{
                           rest: { width: 0 },
                           hover: { width: '100%' },
                        }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                     />
                  </span>

                  <MessageCircle size={20} className="shrink-0" />
               </motion.a>

               {/* SUPPORT */}
               <motion.a
                  href="https://wa.me/+15559879566"
                  className={item}
                  initial="rest"
                  whileHover="hover"
               >
                  <span className="relative">
                     Privat Support
                     <motion.span
                        className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
                        variants={{
                           rest: { width: 0 },
                           hover: { width: '100%' },
                        }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                     />
                  </span>

                  <Send size={20} className="shrink-0" />
               </motion.a>

               {/* EMAIL */}
               <motion.a
                  href="mailto:info@soik.solar"
                  className={item}
                  initial="rest"
                  whileHover="hover"
               >
                  <span className="relative">
                     E-Mail Anfrage
                     <motion.span
                        className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
                        variants={{
                           rest: { width: 0 },
                           hover: { width: '100%' },
                        }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                     />
                  </span>

                  <Mail size={20} className="shrink-0" />
               </motion.a>

               {/* CALL */}
               <motion.a
                  href="tel:+491234567890"
                  className={item}
                  initial="rest"
                  whileHover="hover"
               >
                  <span className="relative">
                     Jetzt Anrufen
                     <motion.span
                        className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
                        variants={{
                           rest: { width: 0 },
                           hover: { width: '100%' },
                        }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                     />
                  </span>

                  <Phone size={20} className="shrink-0" />
               </motion.a>
            </div>
         )}
      </div>
   )
}
