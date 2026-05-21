import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

export default function Home() {
   const [open, setOpen] = useState(false)
   const [step, setStep] = useState(0)

   const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      roofType: '',
      consumption: '',
   })
   const rotatingTexts = [
      'Photovoltaik vom Fachbetrieb',
      'Persönlich. Regional. Ehrlich.',
      'Ihr Ansprechpartner vor Ort',
   ]
   const heroRef = useRef<HTMLDivElement>(null)
   const [currentText, setCurrentText] = useState(0)
   const [heroHeight, setHeroHeight] = useState(0)

   useLayoutEffect(() => {
      setHeroHeight(heroRef.current?.offsetHeight || 0)
   }, [])

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
      }, 1200)

      return () => clearInterval(interval)
   }, [])

   return (
      <main className="w-full overflow-hidden bg-[#0B2D5C]">
         <NavBar heroHeight={heroHeight} />

         {/* HERO */}
         <section
            ref={heroRef}
            className="relative h-screen bg-cover bg-center"
            style={{
               backgroundImage: `url(${import.meta.env.BASE_URL}Top.jpg)`,
            }}
         >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex h-full items-center justify-center">
               <div className="text-center px-6">
                  <h3 className="text-white text-7xl font-bold leading-tight">
                     Solaranlage & Smart Home
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

                  <button
                     onClick={() => setOpen(true)}
                     className="mt-10 bg-[#ffa940] hover:bg-yellow-300 text-black px-8 py-5 rounded-2xl text-lg font-bold transition"
                  >
                     Jetzt Ersparnis berechnen
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
         <Footer />
         {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full max-w-2xl rounded-3xl bg-[#0B2D5C] text-white shadow-2xl border border-white/10 overflow-hidden"
               >
                  {/* HEADER */}
                  <div className="p-6 border-b border-white/10 flex justify-between items-center">
                     <h2 className="text-xl font-bold">
                        Solar Ersparnis Rechner
                     </h2>

                     <button
                        onClick={() => setOpen(false)}
                        className="text-white/60 hover:text-white"
                     >
                        ✕
                     </button>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 space-y-6">
                     {/* STEP INDICATOR */}
                     <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                           <div
                              key={i}
                              className={`h-2 flex-1 rounded-full ${
                                 step >= i ? 'bg-[#ffa940]' : 'bg-white/10'
                              }`}
                           />
                        ))}
                     </div>

                     {/* STEP 1 */}
                     {step === 0 && (
                        <div className="space-y-4">
                           <h3 className="text-lg font-semibold">
                              Wer bist du?
                           </h3>

                           <input
                              placeholder="Name"
                              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                              onChange={(e) =>
                                 setForm({ ...form, name: e.target.value })
                              }
                           />

                           <input
                              placeholder="E-Mail"
                              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                              onChange={(e) =>
                                 setForm({ ...form, email: e.target.value })
                              }
                           />
                        </div>
                     )}

                     {/* STEP 2 */}
                     {step === 1 && (
                        <div className="space-y-4">
                           <h3 className="text-lg font-semibold">
                              Standort & Haus
                           </h3>

                           <input
                              placeholder="Adresse"
                              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                              onChange={(e) =>
                                 setForm({ ...form, address: e.target.value })
                              }
                           />

                           <input
                              placeholder="Jahresverbrauch (kWh)"
                              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                              onChange={(e) =>
                                 setForm({
                                    ...form,
                                    consumption: e.target.value,
                                 })
                              }
                           />
                        </div>
                     )}

                     {/* STEP 3 */}
                     {step === 2 && (
                        <div className="space-y-4">
                           <h3 className="text-lg font-semibold">
                              Fast geschafft
                           </h3>

                           <select
                              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                              onChange={(e) =>
                                 setForm({ ...form, roofType: e.target.value })
                              }
                           >
                              <option value="">Dachtyp wählen</option>
                              <option>Flachdach</option>
                              <option>Schrägdach</option>
                              <option>Garage</option>
                           </select>

                           <input
                              placeholder="Telefon (optional)"
                              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                              onChange={(e) =>
                                 setForm({ ...form, phone: e.target.value })
                              }
                           />
                        </div>
                     )}
                  </div>

                  {/* FOOTER ACTIONS */}
                  <div className="p-6 border-t border-white/10 flex justify-between">
                     <button
                        onClick={() => setStep((s) => Math.max(s - 1, 0))}
                        className="text-white/60 hover:text-white"
                     >
                        Zurück
                     </button>

                     {step < 2 ? (
                        <button
                           onClick={() => setStep((s) => s + 1)}
                           className="bg-[#ffa940] hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold"
                        >
                           Weiter
                        </button>
                     ) : (
                        <button
                           onClick={async () => {
                              //await submitToGoogleForm(form)
                           }}
                           className="bg-[#ffa940] hover:bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold"
                        >
                           Ersparnis berechnen
                        </button>
                     )}
                  </div>
               </motion.div>
            </div>
         )}
      </main>
   )
}
