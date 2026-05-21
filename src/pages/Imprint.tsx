import Footer from '../components/Footer/Footer'
import Navbar from '../components/NavBar/NavBar'

export default function ImpressumPage() {
   return (
      <div className="min-h-screen bg-white text-[#0B2D5C]">
         {/* CONTENT */}
         <main className="max-w-3xl mx-auto px-6 pt-20 pb-12">
            <Navbar forceScrolled />
            <div className="mb-8">
               <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Impressum
               </p>
               <h1 className="text-3xl font-semibold mt-2">
                  Rechtliche Informationen
               </h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
               <div className="space-y-4">
                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Angaben gemäß § 5 TMG
                     </h2>
                     <div className="space-y-1 text-slate-600">
                        <p className="font-semibold">soik.solar</p>
                        <p>Max Mustermann</p>
                        <p>Musterstraße 1</p>
                        <p>40789 Monheim am Rhein</p>
                        <p>Deutschland</p>
                     </div>
                  </section>

                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Kontakt
                     </h2>
                     <div className="space-y-1 text-slate-600">
                        <p>Telefon: +49 123 456789</p>
                        <p>E-Mail: info@soik.solar</p>
                     </div>
                  </section>

                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Vertreten durch
                     </h2>
                     <p className="text-slate-600">Max Mustermann</p>
                  </section>

                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Umsatzsteuer-ID
                     </h2>
                     <p className="text-slate-600">DE123456789</p>
                  </section>
               </div>

               <div className="space-y-4">
                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Haftung für Inhalte
                     </h2>
                     <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für
                        eigene Inhalte auf diesen Seiten nach den allgemeinen
                        Gesetzen verantwortlich.
                     </p>
                  </section>

                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Haftung für Links
                     </h2>
                     <p>
                        Unser Angebot enthält Links zu externen Websites
                        Dritter, auf deren Inhalte wir keinen Einfluss haben.
                     </p>
                  </section>

                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Urheberrecht
                     </h2>
                     <p>
                        Die durch den Seitenbetreiber erstellten Inhalte und
                        Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht.
                     </p>
                  </section>

                  <section className="text-sm leading-6 text-slate-700">
                     <h2 className="text-lg font-semibold text-slate-900 mb-3">
                        Verbraucherstreitbeilegung
                     </h2>
                     <p>
                        Wir sind nicht bereit oder verpflichtet, an
                        Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                     </p>
                  </section>
               </div>
            </div>
         </main>

         <Footer />
      </div>
   )
}
