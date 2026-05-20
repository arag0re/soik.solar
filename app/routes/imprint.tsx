import Footer from '~/components/Footer/Footer'
import Navbar from '~/components/Navbar/NavBar'

export default function ImpressumPage() {
   return (
      <div className="min-h-screen bg-white text-[#0B2D5C]">
         {/* CONTENT */}
         <main className="max-w-4xl mx-auto px-6 pt-40 pb-24">
            <Navbar forceScrolled />
            <h1 className="text-5xl font-bold mb-12">Impressum</h1>
            <div className="space-y-12 text-lg leading-relaxed">
               {/* COMPANY */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">
                     Angaben gemäß § 5 TMG
                  </h2>

                  <div className="space-y-1 text-[#0B2D5C]/80">
                     <p className="font-semibold">soik.solar</p>

                     <p>Max Mustermann</p>
                     <p>Musterstraße 1</p>
                     <p>40789 Monheim am Rhein</p>
                     <p>Deutschland</p>
                  </div>
               </section>

               {/* CONTACT */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>

                  <div className="space-y-1 text-[#0B2D5C]/80">
                     <p>Telefon: +49 123 456789</p>
                     <p>E-Mail: info@soik.solar</p>
                  </div>
               </section>

               {/* REPRESENTED */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">
                     Vertreten durch
                  </h2>

                  <p className="text-[#0B2D5C]/80">Max Mustermann</p>
               </section>

               {/* VAT */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">
                     Umsatzsteuer-ID
                  </h2>

                  <p className="text-[#0B2D5C]/80">
                     Umsatzsteuer-Identifikationsnummer gemäß §27 a
                     Umsatzsteuergesetz:
                  </p>

                  <p className="mt-2 text-[#0B2D5C]/80">DE123456789</p>
               </section>

               {/* LIABILITY */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">
                     Haftung für Inhalte
                  </h2>

                  <p className="text-[#0B2D5C]/80">
                     Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                     Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                     verantwortlich.
                  </p>
               </section>

               {/* LINKS */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">
                     Haftung für Links
                  </h2>

                  <p className="text-[#0B2D5C]/80">
                     Unser Angebot enthält Links zu externen Websites Dritter,
                     auf deren Inhalte wir keinen Einfluss haben.
                  </p>
               </section>

               {/* COPYRIGHT */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>

                  <p className="text-[#0B2D5C]/80">
                     Die durch den Seitenbetreiber erstellten Inhalte und Werke
                     auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                  </p>
               </section>

               {/* DISPUTE */}
               <section>
                  <h2 className="text-2xl font-semibold mb-4">
                     Verbraucherstreitbeilegung
                  </h2>

                  <p className="text-[#0B2D5C]/80">
                     Wir sind nicht bereit oder verpflichtet, an
                     Streitbeilegungsverfahren vor einer
                     Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
               </section>
            </div>
         </main>

         <Footer />
      </div>
   )
}
