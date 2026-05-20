import { motion } from 'framer-motion'

type NavBarElementProps = {
   text: string
   href: string
}

export default function NavBarElement({ text, href }: NavBarElementProps) {
   return (
      <motion.a
         href={href}
         className="relative flex items-center gap-1 text-black font-semibold no-underline"
         whileHover="hover"
         initial="rest"
         animate="rest"
      >
         {text}

         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
         >
            <path
               d="M18 9L12 15L6 9"
               stroke="#072543"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>

         <motion.span
            className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
            variants={{
               rest: { width: 0 },
               hover: { width: '100%' },
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
         />
      </motion.a>
   )
}
