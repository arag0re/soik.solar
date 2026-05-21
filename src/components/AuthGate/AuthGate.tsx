import { useState } from 'react'

const pkek= "seasrd992ijp2ön1"

export default function AuthGate({ children }: { children: React.ReactNode }) {
   const [password, setPassword] = useState('')
   const [authenticated, setAuthenticated] = useState(
      localStorage.getItem('auth') === 'true',
   )

   const handleLogin = (e: React.FormEvent) => {
      e.preventDefault()

      if (password === pkek) {
         localStorage.setItem('auth', 'true')
         setAuthenticated(true)
      } else {
         alert('Falsches Passwort')
      }
   }

   if (authenticated) {
      return children
   }

   return (
      <div className="min-h-screen bg-[#0B2D5C] flex items-center justify-center px-6">
         <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-10">
            <h1 className="text-4xl font-bold text-[#0B2D5C]">
               soik<span className="text-[#ffa940]">.</span>solar
            </h1>

            <p className="mt-4 text-slate-600">
               Geschützter Zugang zur Website
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-4">
               <input
                  type="password"
                  placeholder="Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#ffa940]"
               />

               <button
                  type="submit"
                  className="w-full bg-[#ffa940] hover:bg-[#ff9500] text-black font-semibold py-4 rounded-2xl transition"
               >
                  Website betreten
               </button>
            </form>
         </div>
      </div>
   )
}
