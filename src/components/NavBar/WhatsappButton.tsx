import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ scrolled }: { scrolled: boolean }) {
   return (
      <a
         href="https://wa.me/+15559879566"
         target="_blank"
         rel="noopener noreferrer"
         className={`group fixed top-5 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 hover:scale-105 active:scale-95 ${
            scrolled
               ? 'bg-white border-black text-black hover:bg-black hover:text-white'
               : 'bg-transparent border-white text-white hover:bg-white hover:text-black'
         }`}
      >
         <span className="text-sm font-semibold transition-colors duration-300">
            WhatsApp
         </span>

         <MessageCircle className="transition-colors duration-300" size={18} />
      </a>
   )
}
