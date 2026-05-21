import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

import * as v from 'valibot'

dotenv.config()

const app = express()

/* ---------------- SECURITY ---------------- */

app.use(helmet())

app.use(
   cors({
      origin: ['https://soik.solar'],
      methods: ['POST'],
   })
)

app.use(express.json({ limit: '10kb' }))

/* ---------------- RATE LIMIT ---------------- */

const contactLimiter = rateLimit({
   windowMs: 15 * 60 * 1000,
   max: 5,
   message: {
      success: false,
      message: 'Zu viele Anfragen. Bitte später erneut versuchen.',
   },
})

/* ---------------- VALIDATION ---------------- */

const ContactSchema = v.object({
   name: v.pipe(
      v.string(),
      v.minLength(2),
      v.maxLength(100)
   ),

   email: v.pipe(
      v.string(),
      v.email(),
      v.maxLength(200)
   ),

   message: v.pipe(
      v.string(),
      v.minLength(10),
      v.maxLength(5000)
   ),

   token: v.pipe(
      v.string(),
      v.minLength(1)
   ),
})
/* ---------------- SMTP ---------------- */

const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
   port: Number(process.env.SMTP_PORT),
   secure: false,

   auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
   },
})

/* ---------------- ROUTE ---------------- */

app.post(
   '/api/contact',
   contactLimiter,
   async (req, res) => {
      try {
         /* ---------------- VALIDATE INPUT ---------------- */

         const result = v.safeParse(
            ContactSchema,
            req.body
         )

         if (!result.success) {
            return res.status(400).json({
               success: false,
               message: 'Ungültige Eingabedaten.',
            })
         }

         const {
            name,
            email,
            message,
            token,
         } = result.output

         /* ---------------- VERIFY TURNSTILE ---------------- */

         const verifyResponse = await fetch(
            'https://challenges.cloudflare.com/turnstile/v0/siteverify',
            {
               method: 'POST',

               headers: {
                  'Content-Type':
                     'application/x-www-form-urlencoded',
               },

               body: new URLSearchParams({
                  secret:
                     process.env.TURNSTILE_SECRET,

                  response: token,
               }),
            }
         )

         const verifyData =
            await verifyResponse.json()

         if (!verifyData.success) {
            return res.status(400).json({
               success: false,
               message:
                  'Captcha-Verifizierung fehlgeschlagen.',
            })
         }

         /* ---------------- SEND MAIL ---------------- */

         await transporter.sendMail({
            from: process.env.SMTP_USER,

            to: 'as@sternburg.beer',

            subject: `Neue Anfrage von ${name}`,

            text: `
Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
            `,
         })

         return res.status(200).json({
            success: true,
         })
      } catch (err) {
         console.error(err)

         return res.status(500).json({
            success: false,
            message: 'Serverfehler.',
         })
      }
   }
)

app.listen(3001, () => {
   console.log('API läuft auf Port 3001')
})