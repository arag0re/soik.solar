import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
   return (
      <a
         href="https://wa.me/491234567890"
         target="_blank"
         rel="noopener noreferrer"
         className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-3xl border-2 border-white text-white hover:bg-white hover:text-black transition"
      >
         <span className="text-lg font-semibold">WhatsApp</span>
         <MessageCircle size={22} />
      </a>
   )
}
