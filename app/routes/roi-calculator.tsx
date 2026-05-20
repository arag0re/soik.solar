import { useMemo, useState } from 'react'
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   Tooltip,
   CartesianGrid,
   ResponsiveContainer,
   BarChart,
   Bar,
} from 'recharts'

/* ---------------- INPUT ---------------- */

function Input({ label, value, setValue, min, max, step = 1 }: any) {
   return (
      <div className="flex flex-col gap-2">
         <label className="text-sm font-semibold text-gray-700">{label}</label>

         <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full p-3 border rounded-lg"
         />
      </div>
   )
}

/* ---------------- MAIN ---------------- */

export default function SolarCalculator() {
   const [investment, setInvestment] = useState(18000)
   const [systemSize, setSystemSize] = useState(10)

   const [electricityPrice, setElectricityPrice] = useState(0.35)
   const [feedInTariff, setFeedInTariff] = useState(0.08)
   const [selfConsumption, setSelfConsumption] = useState(60)

   const yieldPerKwp = 1000

   const data = useMemo(() => {
      const production = systemSize * yieldPerKwp

      const selfUsed = production * (selfConsumption / 100)
      const fedIn = production - selfUsed

      const savings = selfUsed * electricityPrice
      const income = fedIn * feedInTariff

      const yearlyBenefit = savings + income

      const payback = investment / yearlyBenefit

      // 📈 25 YEAR CASHFLOW
      let cumulative = -investment

      const cashflow = Array.from({ length: 25 }, (_, i) => {
         cumulative += yearlyBenefit

         return {
            year: i + 1,
            benefit: yearlyBenefit,
            cumulative: cumulative,
         }
      })

      // 📊 BREAKDOWN
      const breakdown = [
         {
            name: 'Eigenverbrauch',
            value: savings,
         },
         {
            name: 'Einspeisung',
            value: income,
         },
      ]

      return {
         cashflow,
         breakdown,
         yearlyBenefit,
         payback,
      }
   }, [investment, systemSize, electricityPrice, feedInTariff, selfConsumption])

   return (
      <div className="max-w-5xl mx-auto p-8 space-y-10">
         <h1 className="text-3xl font-bold text-[#0B2D5C]">
            ☀️ Solar ROI Dashboard
         </h1>

         {/* INPUTS */}
         <div className="grid grid-cols-2 gap-4">
            <Input
               label="Investition (€)"
               value={investment}
               setValue={setInvestment}
               min={5000}
               max={50000}
               step={500}
            />

            <Input
               label="Anlagengröße (kWp)"
               value={systemSize}
               setValue={setSystemSize}
               min={1}
               max={50}
            />

            <Input
               label="Strompreis"
               value={electricityPrice}
               setValue={setElectricityPrice}
               min={0.1}
               max={0.8}
               step={0.01}
            />

            <Input
               label="Einspeisevergütung"
               value={feedInTariff}
               setValue={setFeedInTariff}
               min={0.01}
               max={0.2}
               step={0.01}
            />

            <Input
               label="Eigenverbrauch (%)"
               value={selfConsumption}
               setValue={setSelfConsumption}
               min={10}
               max={100}
            />
         </div>

         {/* 📈 CASHFLOW CHART */}
         <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">📈 25 Jahre Cashflow</h2>

            <ResponsiveContainer width="100%" height={300}>
               <LineChart data={data.cashflow}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                     type="monotone"
                     dataKey="cumulative"
                     stroke="#0B2D5C"
                     strokeWidth={3}
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>

         {/* 📊 BREAKDOWN */}
         <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">⚡ Jährlicher Nutzen</h2>

            <ResponsiveContainer width="100%" height={300}>
               <BarChart data={data.breakdown}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#ffa940" />
               </BarChart>
            </ResponsiveContainer>
         </div>

         {/* RESULT SUMMARY */}
         <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#0B2D5C] text-white rounded-xl">
               <div className="text-sm">Jährlicher Nutzen</div>
               <div className="text-2xl font-bold">
                  € {data.yearlyBenefit.toFixed(0)}
               </div>
            </div>

            <div className="p-4 bg-gray-100 rounded-xl">
               <div className="text-sm">Amortisation</div>
               <div className="text-2xl font-bold">
                  {data.payback.toFixed(1)} Jahre
               </div>
            </div>
         </div>
      </div>
   )
}
