import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'

import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react'

import { Turnstile } from '@marsidev/react-turnstile'

export default function ContactPage() {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

   const [token, setToken] = useState('')

   const [loading, setLoading] = useState(false)

   const [success, setSuccess] = useState(false)

   const [error, setError] = useState('')

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setError('')
      setSuccess(false)

      if (!token) {
         setError('Bitte bestätigen Sie das Captcha.')
         return
      }

      try {
         setLoading(true)

         const response = await fetch('https://api.soik.solar/api/contact', {
            method: 'POST',

            headers: {
               'Content-Type': 'application/json',
            },

            body: JSON.stringify({
               name,
               email,
               message,
               token,
            }),
         })

         const data = await response.json()

         if (!response.ok) {
            throw new Error(data.message || 'Fehler beim Senden der Anfrage.')
         }

         setSuccess(true)

         setName('')
         setEmail('')
         setMessage('')
      } catch (err) {
         if (err instanceof Error) {
            setError(err.message)
         } else {
            setError('Es ist ein unerwarteter Fehler aufgetreten.')
         }
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className="min-h-screen bg-white text-[#0B2D5C] overflow-hidden">
         <Navbar forceScrolled />

         {/* HERO */}
         <section className="relative pt-32 pb-24 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2D5C]/5 via-white to-[#ffa940]/10 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
               <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#ffa940] font-semibold">
                     Kontakt
                  </p>

                  <h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                     Lassen Sie uns
                     <br />
                     gemeinsam starten.
                  </h1>

                  <p className="mt-8 text-lg leading-8 text-slate-600">
                     Sie planen eine Solaranlage oder haben Fragen zu
                     Speicherlösungen und Energieeffizienz? Wir beraten Sie
                     persönlich und entwickeln gemeinsam die passende Lösung für
                     Ihr Projekt.
                  </p>
               </div>
            </div>
         </section>

         {/* CONTACT */}
         <section className="px-6 pb-28">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10">
               {/* INFO */}
               <div className="relative bg-[#0B2D5C] rounded-[2.5rem] overflow-hidden p-10 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,169,64,0.2),transparent_35%)]" />

                  <div className="relative">
                     <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
                        <ShieldCheck size={16} />
                        Persönliche Beratung
                     </div>

                     <h2 className="mt-8 text-4xl font-semibold leading-tight">
                        Wir freuen uns auf Ihre Anfrage.
                     </h2>

                     <p className="mt-6 text-white/70 leading-8">
                        Egal ob Balkonkraftwerk, Speicherlösung oder komplette
                        Photovoltaikanlage — wir begleiten Sie von der ersten
                        Idee bis zur fertigen Umsetzung.
                     </p>

                     <div className="mt-12 space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                              <Mail size={20} />
                           </div>

                           <div>
                              <p className="text-white/50 text-sm">E-Mail</p>

                              <a
                                 href="mailto:info@soik.solar"
                                 className="text-lg font-medium hover:text-[#ffa940] transition"
                              >
                                 info@soik.solar
                              </a>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                              <Phone size={20} />
                           </div>

                           <div>
                              <p className="text-white/50 text-sm">Telefon</p>

                              <a
                                 href="tel:+491234567890"
                                 className="text-lg font-medium hover:text-[#ffa940] transition"
                              >
                                 +49 123 4567890
                              </a>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                              <MapPin size={20} />
                           </div>

                           <div>
                              <p className="text-white/50 text-sm">Standort</p>

                              <p className="text-lg font-medium">
                                 Monheim am Rhein, Deutschland
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* FORM */}
               <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
                  <h2 className="text-3xl font-semibold">Anfrage senden</h2>

                  <p className="mt-4 text-slate-600 leading-7">
                     Nutzen Sie unser Kontaktformular und wir melden uns
                     schnellstmöglich bei Ihnen zurück.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                     {/* NAME */}
                     <div>
                        <label className="block text-sm font-medium mb-2">
                           Name
                        </label>

                        <input
                           type="text"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                           className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#ffa940] transition"
                           placeholder="Ihr Name"
                        />
                     </div>

                     {/* EMAIL */}
                     <div>
                        <label className="block text-sm font-medium mb-2">
                           E-Mail
                        </label>

                        <input
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-[#ffa940] transition"
                           placeholder="ihre@email.de"
                        />
                     </div>

                     {/* MESSAGE */}
                     <div>
                        <label className="block text-sm font-medium mb-2">
                           Nachricht
                        </label>

                        <textarea
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                           required
                           rows={6}
                           className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-[#ffa940] transition"
                           placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                        />
                     </div>

                     {/* TURNSTILE */}
                     <div className="pt-2">
                        <Turnstile
                           siteKey="0x4AAAAAADT1iTdzrahYCgye"
                           onSuccess={(token) => setToken(token)}
                        />
                     </div>

                     {/* ERROR */}
                     {error && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-600 text-sm">
                           {error}
                        </div>
                     )}

                     {/* SUCCESS */}
                     {success && (
                        <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700 text-sm">
                           Ihre Anfrage wurde erfolgreich gesendet.
                        </div>
                     )}

                     {/* BUTTON */}
                     <button
                        type="submit"
                        disabled={loading}
                        className="group inline-flex items-center justify-center gap-3 w-full bg-[#0B2D5C] hover:bg-[#123a74] text-white rounded-2xl px-8 py-4 font-medium transition-all duration-300 disabled:opacity-50"
                     >
                        {loading ? 'Wird gesendet...' : 'Anfrage senden'}

                        {!loading && (
                           <ArrowRight
                              size={18}
                              className="group-hover:translate-x-1 transition-transform"
                           />
                        )}
                     </button>

                     <p className="text-xs text-slate-500 leading-6">
                        Mit dem Absenden erklären Sie sich mit der Verarbeitung
                        Ihrer Daten gemäß unserer Datenschutzerklärung
                        einverstanden.
                     </p>
                  </form>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   )
}
