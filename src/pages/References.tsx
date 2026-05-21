import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'
import {
   ChevronLeft,
   ChevronRight,
   Zap,
   BatteryCharging,
   Sun,
} from 'lucide-react'

const projects = [
   {
      title: 'Photovoltaikanlage Einfamilienhaus',
      subtitle: 'Effiziente Eigenversorgung mit Speicherlösung',
      image: `${import.meta.env.BASE_URL}proj1.jpg`,
      icon: Sun,

      description:
         'Für dieses moderne Einfamilienhaus wurde eine leistungsstarke Photovoltaikanlage inklusive Speicherlösung geplant und umgesetzt. Der Fokus lag auf maximaler Energieeffizienz, langfristiger Wirtschaftlichkeit und moderner Systemintegration.',

      stats: [
         '14 kWp Leistung',
         'Batteriespeicher integriert',
         'Smart Energy Management',
      ],
   },

   {
      title: 'Garagen- & Dachanlage',
      subtitle: 'Nachhaltige Energie clever genutzt',
      image: `${import.meta.env.BASE_URL}proj2.jpg`,
      icon: BatteryCharging,

      description:
         'Diese moderne Dach- und Garagenanlage verbindet hochwertige Solartechnik mit effizienter Flächennutzung. Die Anlage wurde speziell auf den individuellen Stromverbrauch des Kunden ausgelegt und bietet optimale Voraussetzungen für zukünftige Erweiterungen.',

      stats: [
         'Optimierte Dachausrichtung',
         'Hohe Wirtschaftlichkeit',
         'Vorbereitet für Speichererweiterung',
      ],
   },
]

export default function ReferenzenPage() {
   const [active, setActive] = useState(0)

   const nextSlide = () => {
      setActive((prev) => (prev + 1) % projects.length)
   }

   const prevSlide = () => {
      setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
   }

   const project = projects[active]
   const Icon = project.icon

   return (
      <div className="min-h-screen bg-white text-[#0B2D5C] overflow-hidden">
         <Navbar forceScrolled />

         {/* HERO */}
         <section className="relative pt-32 pb-24 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D5C]/5 via-white to-[#ffa940]/10 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
               <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#ffa940] font-semibold">
                     Referenzen
                  </p>

                  <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                     Projekte,
                     <br />
                     die Zukunft erzeugen.
                  </h1>

                  <p className="mt-8 text-lg leading-8 text-slate-600">
                     Jede Anlage entsteht aus individueller Planung, technischer
                     Präzision und echter Leidenschaft für nachhaltige Energie.
                     Vom privaten Eigenheim bis hin zu modernen Garagen- und
                     Dachanlagen realisieren wir effiziente Energielösungen mit
                     langfristigem Mehrwert.
                  </p>
               </div>
            </div>
         </section>

         {/* SLIDER */}
         <section className="px-6 pb-28">
            <div className="max-w-6xl mx-auto">
               <div className="relative bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <div className="grid lg:grid-cols-2">
                     {/* IMAGE */}
                     <div className="relative h-[520px] lg:h-full overflow-hidden">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover scale-[1.02]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        {/* NAVIGATION */}
                        <div className="absolute bottom-6 left-6 flex gap-3">
                           <button
                              onClick={prevSlide}
                              className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                           >
                              <ChevronLeft size={22} />
                           </button>

                           <button
                              onClick={nextSlide}
                              className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                           >
                              <ChevronRight size={22} />
                           </button>
                        </div>
                     </div>

                     {/* CONTENT */}
                     <div className="relative p-10 lg:p-14 flex flex-col justify-center">
                        {/* GLOW */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-[#ffa940]/10 blur-3xl rounded-full pointer-events-none" />

                        {/* ICON */}
                        <div className="relative w-16 h-16 rounded-2xl bg-[#ffa940]/10 text-[#ffa940] flex items-center justify-center mb-8 border border-[#ffa940]/20">
                           <Icon size={32} />
                        </div>

                        {/* SUBTITLE */}
                        <p className="text-sm uppercase tracking-[0.24em] text-[#ffa940] font-semibold">
                           {project.subtitle}
                        </p>

                        {/* TITLE */}
                        <h2 className="mt-4 text-4xl font-semibold leading-tight">
                           {project.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-6 text-slate-600 leading-8 text-lg">
                           {project.description}
                        </p>

                        {/* STATS */}
                        <div className="grid gap-4 mt-10">
                           {project.stats.map((stat) => (
                              <div
                                 key={stat}
                                 className="flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 hover:border-[#ffa940]/30 hover:bg-[#ffa940]/5 transition-all duration-300"
                              >
                                 <div className="w-9 h-9 rounded-xl bg-[#ffa940]/10 flex items-center justify-center">
                                    <Zap size={16} className="text-[#ffa940]" />
                                 </div>

                                 <span className="text-slate-700 font-medium">
                                    {stat}
                                 </span>
                              </div>
                           ))}
                        </div>

                        {/* INDICATORS */}
                        <div className="flex gap-3 mt-10">
                           {projects.map((_, index) => (
                              <button
                                 key={index}
                                 onClick={() => setActive(index)}
                                 className={`h-2 rounded-full transition-all duration-300 ${
                                    active === index
                                       ? 'w-10 bg-[#ffa940]'
                                       : 'w-2 bg-slate-300 hover:bg-slate-400'
                                 }`}
                              />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   )
}
