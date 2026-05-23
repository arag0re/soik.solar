import { useLocation, Navigate } from 'react-router-dom'
import { useState } from 'react'

const PASSWORD = 'seasrd992ijp2ön1'

export default function AuthGate({ children }: { children: React.ReactNode }) {
   const location = useLocation()

   const [authenticated, setAuthenticated] = useState(() => {
      return localStorage.getItem('auth') === 'true'
   })

   const [password, setPassword] = useState('')

   const handleLogin = (e: React.FormEvent) => {
      e.preventDefault()

      if (password === PASSWORD) {
         localStorage.setItem('auth', 'true')
         setAuthenticated(true)
      } else {
         alert('Falsches Passwort')
      }
   }

   // block ALL routes except login page
   if (!authenticated && location.pathname !== '/') {
      return <Navigate to="/" replace />
   }

   if (!authenticated) {
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
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="w-full rounded-2xl border border-slate-200 px-5 py-4"
                  />

                  <button className="w-full bg-[#ffa940] py-4 rounded-2xl">
                     Login
                  </button>
               </form>
            </div>
         </div>
      )
   }

   return children
}
