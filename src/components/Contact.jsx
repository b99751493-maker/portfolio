import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Send, Github, Linkedin, Instagram, AlertCircle, CheckCircle2, Info } from 'lucide-react'
import { contacts, contactPlaceholders, FORM_ENDPOINT } from '../data/siteData'
import { Reveal, SectionHeader } from './Reveal'
import Magnetic from './Magnetic'

const links = [
  { key: 'email', label: 'Email', icon: Mail, href: (v) => `mailto:${v}` },
  { key: 'telegram', label: 'Telegram', icon: Send, href: (v) => v },
  { key: 'github', label: 'GitHub', icon: Github, href: (v) => v },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: (v) => v },
  { key: 'instagram', label: 'Instagram', icon: Instagram, href: (v) => v },
]

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Ismingizni kiriting (kamida 2 belgi).'
  if (!emailRe.test(v.email.trim())) e.email = "To'g'ri email manzil kiriting."
  if (v.message.trim().length < 10) e.message = 'Xabar kamida 10 belgidan iborat bo‘lsin.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((s) => ({ ...s, [name]: value }))
    if (errors[name]) setErrors((s) => ({ ...s, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setStatus({ type: 'error', text: "Iltimos, belgilangan maydonlarni to'g'rilang." })
      return
    }

    // Backend ulanmagan bo'lsa — yolg'on "yuborildi" demaymiz.
    if (!FORM_ENDPOINT) {
      setStatus({
        type: 'info',
        text: contacts.email
          ? 'Forma serverga ulanmagan, shuning uchun xabar yuborilmadi. Quyidagi tugma orqali email dasturingizda ochishingiz mumkin.'
          : "Forma hali serverga ulanmagan, shuning uchun xabar yuborilmadi. Egasi FORM_ENDPOINT ni sozlagach ishlaydi.",
      })
      return
    }

    setStatus({ type: 'loading', text: 'Yuborilmoqda…' })
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus({ type: 'success', text: 'Xabaringiz yuborildi. Rahmat!' })
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus({ type: 'error', text: "Xabar yuborilmadi. Birozdan so'ng qayta urinib ko'ring." })
    }
  }

  const mailtoHref = contacts.email
    ? `mailto:${contacts.email}?subject=${encodeURIComponent(`Portfolio message from ${values.name}`)}&body=${encodeURIComponent(values.message)}`
    : null

  const field =
    'w-full rounded-2xl border bg-midnight/60 px-5 py-4 text-ivory placeholder:text-silver/60 outline-none transition-colors focus:border-lime'

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/25 blur-[150px]"
        aria-hidden="true"
      />
      <SectionHeader index="05" eyebrow="Contact" title="Let's build" outline="together" />

      <div className="relative grid gap-10 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-3">
            {links.map((l) => {
              const value = contacts[l.key]
              const Wrapper = value ? 'a' : 'div'
              const props = value
                ? {
                    href: l.href(value),
                    ...(l.key === 'email' ? {} : { target: '_blank', rel: 'noopener noreferrer' }),
                  }
                : {}
              return (
                <li key={l.key}>
                  <Wrapper
                    {...props}
                    className={`glass group flex items-center justify-between rounded-3xl p-5 transition-colors ${
                      value ? 'hover:border-lime/60' : ''
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory/5 text-lime">
                        <l.icon size={20} />
                      </span>
                      <span>
                        <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-silver">
                          {l.label}
                        </span>
                        <span className={`block break-all font-display text-lg ${value ? 'text-ivory' : 'text-ember'}`}>
                          {value || contactPlaceholders[l.key]}
                        </span>
                      </span>
                    </span>
                    {value && (
                      <span className="text-lime transition-transform duration-300 group-hover:translate-x-1">→</span>
                    )}
                  </Wrapper>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-[2rem] p-7 md:p-10" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.25em] text-silver">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={values.name}
                onChange={onChange}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'err-name' : undefined}
                placeholder="Your name"
                className={`${field} ${errors.name ? 'border-ember' : 'border-ivory/10'}`}
              />
              {errors.name && (
                <p id="err-name" className="mt-2 text-sm text-ember">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.25em] text-silver">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'err-email' : undefined}
                placeholder="you@example.com"
                className={`${field} ${errors.email ? 'border-ember' : 'border-ivory/10'}`}
              />
              {errors.email && (
                <p id="err-email" className="mt-2 text-sm text-ember">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.25em] text-silver">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'err-message' : undefined}
                placeholder="Tell me about your project…"
                className={`${field} resize-none ${errors.message ? 'border-ember' : 'border-ivory/10'}`}
              />
              {errors.message && (
                <p id="err-message" className="mt-2 text-sm text-ember">
                  {errors.message}
                </p>
              )}
            </div>

            <Magnetic strength={0.2}>
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="flex items-center gap-3 rounded-full bg-lime px-8 py-4 font-medium text-midnight shadow-glow disabled:opacity-60"
              >
                {status.type === 'loading' ? 'Sending…' : 'Send message'} <Send size={18} />
              </button>
            </Magnetic>

            <div aria-live="polite" role="status">
              <AnimatePresence mode="wait">
                {status.type !== 'idle' && status.type !== 'loading' && (
                  <motion.div
                    key={status.type + status.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-start gap-3 rounded-2xl border p-4 text-sm ${
                      status.type === 'success'
                        ? 'border-lime/50 bg-lime/10 text-lime'
                        : status.type === 'error'
                          ? 'border-ember/50 bg-ember/10 text-ember'
                          : 'border-silver/40 bg-ivory/5 text-chrome'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    ) : status.type === 'error' ? (
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    ) : (
                      <Info size={18} className="mt-0.5 shrink-0" />
                    )}
                    <div>
                      <p>{status.text}</p>
                      {status.type === 'info' && mailtoHref && (
                        <a href={mailtoHref} className="mt-2 inline-block text-lime underline underline-offset-4">
                          Email dasturida ochish →
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
