import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'

import {
   Sun,
   BatteryCharging,
   Wrench,
   ChartNoAxesCombined,
   ShieldCheck,
   ArrowRight,
} from 'lucide-react'

const services = [
   {
      title: 'Planung & Analyse',
      icon: ChartNoAxesCombined,

      description:
         'Individuelle Analyse Ihrer Dachfläche, Energiebedarfsberechnung und Wirtschaftlichkeitsprüfung für maximale Effizienz und langfristige Rentabilität.',

      points: [
         'Dach- & Standortanalyse',
         'Ertragsberechnung',
         'Wirtschaftlichkeitsprüfung',
         'Persönliche Beratung',
      ],
   },

   {
      title: 'Photovoltaikanlagen',
      icon: Sun,

      description:
         'Professionelle Planung und Installation moderner Solaranlagen für Einfamilienhäuser, Garagen und kleinere Gewerbeobjekte.',

      points: [
         'Hochwertige Solarmodule',
         'Moderne Wechselrichter',
         'Saubere Installation',
         'Langfristige Energieeinsparung',
      ],
   },

   {
      title: 'Speicherlösungen',
      icon: BatteryCharging,

      description:
         'Intelligente Batteriespeicher zur Optimierung Ihres Eigenverbrauchs und für mehr Unabhängigkeit vom Stromnetz.',

      points: [
         'Eigenverbrauch optimieren',
         'Notstromoptionen',
         'Moderne Speichertechnik',
         'Zukunftssichere Systeme',
      ],
   },

   {
      title: 'Montage & Wartung',
      icon: Wrench,

      description:
         'Zuverlässige Installation, technische Wartung und langfristiger Support für maximale Betriebssicherheit Ihrer Anlage.',

      points: [
         'Fachgerechte Montage',
         'Regelmäßige Wartung',
         'Systemüberwachung',
         'Schneller Support',
      ],
   },
]

export default function ServicePage() {
   return (
      <div className="min-h-screen bg-white text-[#0B2D5C] overflow-hidden">
         <Navbar forceScrolled />

         {/* HERO */}
         <section className="relative pt-32 pb-24 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D5C]/5 via-white to-[#ffa940]/10 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
               <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#ffa940] font-semibold">
                     Leistungen
                  </p>

                  <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                     Energie Lösungen
                     <br />
                     aus einer Hand.
                  </h1>

                  <p className="mt-8 text-lg leading-8 text-slate-600">
                     Von der ersten Analyse bis zur fertigen Anlage begleiten
                     wir unsere Kunden mit technischer Kompetenz, präziser
                     Planung und moderner Solartechnik.
                  </p>
               </div>
            </div>
         </section>

         {/* SERVICES */}
         <section className="px-6 pb-28">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
               {services.map((service) => {
                  const Icon = service.icon

                  return (
                     <div
                        key={service.title}
                        className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                     >
                        {/* GLOW */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffa940]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                        {/* ICON */}
                        <div className="relative w-16 h-16 rounded-2xl bg-[#ffa940]/10 border border-[#ffa940]/20 text-[#ffa940] flex items-center justify-center">
                           <Icon size={30} />
                        </div>

                        {/* CONTENT */}
                        <div className="relative mt-8">
                           <h2 className="text-3xl font-semibold leading-tight">
                              {service.title}
                           </h2>

                           <p className="mt-5 text-slate-600 leading-8">
                              {service.description}
                           </p>

                           {/* POINTS */}
                           <div className="mt-8 grid gap-3">
                              {service.points.map((point) => (
                                 <div
                                    key={point}
                                    className="flex items-center gap-3 text-slate-700"
                                 >
                                    <div className="w-2 h-2 rounded-full bg-[#ffa940]" />

                                    <span>{point}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>
         </section>

         {/* PROCESS */}
         <section className="px-6 pb-28">
            <div className="max-w-6xl mx-auto">
               <div className="bg-[#0B2D5C] rounded-[2.5rem] overflow-hidden relative px-8 py-16 md:p-16 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,169,64,0.2),transparent_35%)]" />

                  <div className="relative">
                     <p className="text-sm uppercase tracking-[0.24em] text-[#ffa940] font-semibold">
                        Unser Prozess
                     </p>

                     <h2 className="mt-5 text-4xl md:text-5xl font-semibold max-w-3xl leading-tight">
                        Von der Idee bis zur fertigen Solaranlage.
                     </h2>

                     <div className="grid md:grid-cols-3 gap-8 mt-14">
                        {[
                           {
                              title: 'Analyse',
                              text: 'Wir prüfen Ihre Anforderungen, Dachflächen und Verbrauchsdaten.',
                           },

                           {
                              title: 'Planung',
                              text: 'Individuelle Planung Ihrer optimalen Energielösung.',
                           },

                           {
                              title: 'Umsetzung',
                              text: 'Professionelle Installation und langfristige Betreuung.',
                           },
                        ].map((step, index) => (
                           <div
                              key={step.title}
                              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                           >
                              <div className="text-[#ffa940] text-sm font-semibold mb-4">
                                 0{index + 1}
                              </div>

                              <h3 className="text-2xl font-semibold">
                                 {step.title}
                              </h3>

                              <p className="mt-4 text-white/70 leading-7">
                                 {step.text}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA */}
         <section className="px-6 pb-28">
            <div className="max-w-5xl mx-auto text-center">
               <div className="inline-flex items-center gap-2 bg-[#ffa940]/10 border border-[#ffa940]/20 text-[#ffa940] px-4 py-2 rounded-full text-sm font-medium">
                  <ShieldCheck size={16} />
                  Nachhaltige Energielösungen
               </div>

               <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
                  Bereit für Ihre eigene
                  <br />
                  Solaranlage?
               </h2>

               <p className="mt-6 text-lg text-slate-600 leading-8 max-w-2xl mx-auto">
                  Lassen Sie sich unverbindlich beraten und entdecken Sie, wie
                  moderne Solartechnik Ihre Energiekosten nachhaltig reduzieren
                  kann.
               </p>

               <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                     href="/#/contact"
                     className="group inline-flex items-center gap-3 bg-[#0B2D5C] text-white px-8 py-4 rounded-2xl font-medium hover:bg-[#123a74] transition-all duration-300"
                  >
                     Jetzt Beratung anfragen
                     <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                     />
                  </a>

                  <a
                     href="/#/references"
                     className="inline-flex items-center gap-3 border border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-medium hover:border-[#ffa940] hover:text-[#ffa940] transition-all duration-300"
                  >
                     Projekte ansehen
                  </a>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   )
}
