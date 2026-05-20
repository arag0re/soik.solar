import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ scrolled }) {
   return (
      <a
         href="https://wa.me/491234567890"
         target="_blank"
         rel="noopener noreferrer"
         className={`fixed top-3 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-white hover:bg-white hover:text-black transition ${
            scrolled
               ? 'bg-white border-black text-black'
               : 'bg-transparent border-white text-white'
         }`}
      >
         <span
            className={`text-lg font-semibold${scrolled ? ' text-black' : ' text-white'}`}
         >
            WhatsApp
         </span>
         <MessageCircle color={scrolled ? '#000' : '#fff'} size={22} />
      </a>
   )
}
