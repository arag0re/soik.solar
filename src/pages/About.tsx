import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

   return (
      <div className="min-h-screen bg-white text-[#0B2D5C] overflow-hidden">
         <Navbar forceScrolled />

         {/* HERO */}
         <section className="relative pt-32 pb-20 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D5C]/5 via-white to-emerald-100/40 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
               <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#ffa940] font-medium">
                     Über uns
                  </p>

                  <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-tight text-[#0B2D5C]">
                     Technik aus Leidenschaft.
                     <br />
                     Energie für die Zukunft.
                  </h1>

                  <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
                     Was mit Begeisterung für 3D-Druck, CNC-Maschinenbau,
                     Elektronik und Solartechnik begann, entwickelte sich zu
                     einem modernen Unternehmen für professionelle
                     Photovoltaiklösungen.
                  </p>
               </div>
            </div>
         </section>

         {/* TEAM */}
         <section className="px-6 pb-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
               {/* PERSON 1 */}
               <div className="group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                     <div className="w-28 h-28 rounded-2xl bg-slate-200 overflow-hidden mb-6">
                        <img
                           src={`${import.meta.env.BASE_URL}Sebi.jpg`}
                           alt="Gründer"
                           className="w-full h-full object-cover"
                        />
                     </div>

                     <div className="space-y-4">
                        <div>
                           <h2 className="text-2xl font-semibold text-[#0B2D5C]">
                              Max Mustermann
                           </h2>
                           <p className="text-[#ffa940] text-sm font-medium mt-1">
                              Gründer & Technischer Leiter
                           </p>
                        </div>

                        <p className="text-slate-600 leading-7">
                           Als leidenschaftlicher Techniker begann sein Weg mit
                           3D-Druck, CNC-Maschinenbau und Elektronik. Mit
                           wachsender Erfahrung im Bereich erneuerbare Energien
                           entstand die Vision, moderne Solartechnik
                           professionell und nachhaltig in die Praxis
                           umzusetzen.
                        </p>

                        <p className="text-slate-600 leading-7">
                           Heute übernimmt er die Analyse, Planung, Installation
                           und Wartung von Solaranlagen verschiedenster Größen –
                           vom Balkonkraftwerk bis hin zu komplexeren Anlagen
                           für Einfamilienhäuser und Gewerbeobjekte.
                        </p>
                     </div>
                  </div>
               </div>

               {/* PERSON 2 */}
               <div className="group relative bg-[#0B2D5C] text-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-transparent opacity-80" />

                  <div className="relative">
                     <div className="w-28 h-28 rounded-2xl bg-slate-700 overflow-hidden mb-6">
                        <img
                           src={`${import.meta.env.BASE_URL}Valli.jpg`}
                           alt="Mitgründer"
                           className="w-full h-full object-cover"
                        />
                     </div>

                     <div className="space-y-4">
                        <div>
                           <h2 className="text-2xl font-semibold">
                              Vorname Nachname
                           </h2>
                           <p className="text-[#ffa940] text-sm font-medium mt-1">
                              Mitgründer & Projektkoordination
                           </p>
                        </div>

                        <p className="text-slate-200 leading-7">
                           Gemeinsam mit technischem Verständnis und praktischer
                           Erfahrung sorgt er für eine zuverlässige Umsetzung
                           unserer Projekte – von der Beratung bis zur finalen
                           Inbetriebnahme.
                        </p>

                        <p className="text-slate-200 leading-7">
                           Der Fokus liegt dabei auf Qualität, sauberer Arbeit
                           und individuellen Lösungen für private und
                           gewerbliche Kunden.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* VALUES */}
         <section className="px-6 pb-28">
            <div className="max-w-6xl mx-auto">
               <div className="rounded-[2rem] bg-gradient-to-br from-[#0B2D5C] to-[#123d78] p-10 md:p-14 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

                  <div className="relative grid lg:grid-cols-3 gap-10">
                     <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-[#ffa940]">
                           Unsere Mission
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold leading-tight">
                           Nachhaltige Energie einfach und professionell
                           zugänglich machen.
                        </h2>
                     </div>

                     <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                           <h3 className="font-semibold text-lg mb-3">
                              Analyse
                           </h3>

                           <p className="text-slate-300 text-sm leading-6">
                              Individuelle Beratung und Planung passend zu Ihrem
                              Verbrauch und Ihren Anforderungen.
                           </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                           <h3 className="font-semibold text-lg mb-3">
                              Installation
                           </h3>

                           <p className="text-slate-300 text-sm leading-6">
                              Fachgerechte Montage moderner Photovoltaik- und
                              Speichersysteme.
                           </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                           <h3 className="font-semibold text-lg mb-3">
                              Wartung
                           </h3>

                           <p className="text-slate-300 text-sm leading-6">
                              Langfristige Betreuung und Optimierung bestehender
                              Anlagen für maximale Effizienz.
                           </p>
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
