import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
   return (
      <header className="fixed top-0 left-0 w-full z-50">
         <div className="relative h-28 w-full">
            {/* LOGO */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30">
               <Link
                  to="/"
                  className="text-white text-4xl font-bold tracking-tight no-underline"
               >
                  Soik<span className="text-yellow-400">.</span>Solar
               </Link>
            </div>

            {/* NAVBAR */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
               <nav className="bg-white rounded-full shadow-2xl px-10 h-[74px] flex items-center">
                  <div className="flex items-center gap-10">
                     <a
                        href="#produkte"
                        className="text-black no-underline font-semibold hover:text-yellow-500 transition"
                     >
                        Produkte
                     </a>

                     <a
                        href="#service"
                        className="text-black no-underline font-semibold hover:text-yellow-500 transition"
                     >
                        Service
                     </a>

                     <a
                        href="#magazin"
                        className="text-black no-underline font-semibold hover:text-yellow-500 transition"
                     >
                        Magazin
                     </a>

                     <a
                        href="#about"
                        className="text-black no-underline font-semibold hover:text-yellow-500 transition"
                     >
                        Über Uns
                     </a>

                     <Link
                        to="/kontakt"
                        className="text-black no-underline font-semibold hover:text-yellow-500 transition"
                     >
                        Kontakt
                     </Link>
                  </div>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default function Home() {
   const rotatingTexts = [
      'Photovoltaik vom Fachbetrieb',
      'Persönlich. Regional. Ehrlich.',
      'Ihr Ansprechpartner vor Ort',
   ]

   const [currentText, setCurrentText] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
      }, 1200)

      return () => clearInterval(interval)
   }, [])

   return (
      <main className="w-full overflow-hidden">
         <Navbar />

         {/* HERO */}
         <section
            className="relative h-screen bg-cover bg-center"
            style={{
               backgroundImage:
                  "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop')",
            }}
         >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-center justify-center">
               <div className="text-center px-6">
                  <h3 className="text-white text-7xl font-bold leading-tight">
                     Solaranlage & Smarthome
                  </h3>

                  <div className="mt-6 h-[42px] overflow-hidden relative">
                     <AnimatePresence mode="wait">
                        <motion.p
                           key={currentText}
                           initial={{
                              opacity: 0,
                              y: 20,
                           }}
                           animate={{
                              opacity: 1,
                              y: 0,
                           }}
                           exit={{
                              opacity: 0,
                              y: -20,
                           }}
                           transition={{
                              duration: 1.2,
                              ease: [0.1, 1, 0.36, 1],
                           }}
                           className="
        absolute
        w-full
        text-center
        text-white/90
        text-2xl
        font-medium
        tracking-tight
      "
                        >
                           {rotatingTexts[currentText]}
                        </motion.p>
                     </AnimatePresence>
                  </div>

                  <button className="mt-10 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-2xl text-lg font-bold transition">
                     Jetzt starten
                  </button>
               </div>
            </div>
            {/* BENEFITS FLOATING BAR */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20">
               <div
                  className="bg-[#4D4D36]/95
                            backdrop-blur-md
                            rounded-[28px]
                            px-8
                            py-4
                            flex
                            items-center
                            gap-10"
               >
                  <div className="flex items-center gap-4 whitespace-nowrap">
                     <span className="text-[#79E27D] text-4xl leading-none">
                        ✓
                     </span>

                     <span className="text-white text-[22px] font-semibold">
                        Regional verwurzelt
                     </span>
                  </div>

                  <div className="flex items-center gap-4 whitespace-nowrap">
                     <span className="text-[#79E27D] text-4xl leading-none">
                        ✓
                     </span>

                     <span className="text-white text-[22px] font-semibold">
                        Persönliche Beratung
                     </span>
                  </div>

                  <div className="flex items-center gap-4 whitespace-nowrap">
                     <span className="text-[#79E27D] text-4xl leading-none">
                        ✓
                     </span>

                     <span className="text-white text-[22px] font-semibold">
                        Alles aus einer Hand
                     </span>
                  </div>
               </div>
            </div>
         </section>

         {/* CONTENT */}
         <section id="produkte" className="py-32 px-10 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-5xl font-bold">Moderne Solarsysteme</h2>

                  <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                     Hochwertige Solarlösungen für maximale Energieeffizienz und
                     langfristige Einsparungen.
                  </p>
               </div>

               <img
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070&auto=format&fit=crop"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
               />
            </div>
         </section>

         <section id="service" className="py-32 px-10 bg-gray-100">
            <div className="max-w-7xl mx-auto text-center">
               <h2 className="text-5xl font-bold">Energie neu gedacht</h2>

               <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto">
                  Wir kombinieren Solaranlagen, Wärmepumpen und moderne
                  Energiespeicher zu einem perfekten Gesamtsystem.
               </p>
            </div>
         </section>
      </main>
   )
}
