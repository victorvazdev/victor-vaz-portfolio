import { useState, type FormEvent } from 'react'
import { contactEndpoint, profile, socials } from '../data/portfolio'
import { Icon } from './Icon'
import { Section } from './Section'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Campo invisível para humanos: se vier preenchido, é bot.
    if (data.get('website')) {
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name')).trim(),
          email: String(data.get('email')).trim(),
          message: String(data.get('message')).trim(),
        }),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contato"
      kicker="Contato"
      title="Vamos conversar?"
      intro="Estou aberto a oportunidades como desenvolvedor full stack, mobile ou back-end. Mande uma mensagem ou fale comigo direto pelos canais abaixo."
    >
      <div className="contact">
        <ul className="contact__channels">
          <li>
            <a href={`mailto:${profile.email}`} className="channel">
              <Icon name="mail" />
              <span>
                <span className="channel__label">E-mail</span>
                {profile.email}
              </span>
            </a>
          </li>
          <li>
            <a href={profile.phoneHref} target="_blank" rel="noreferrer" className="channel">
              <Icon name="phone" />
              <span>
                <span className="channel__label">WhatsApp</span>
                {profile.phone}
              </span>
            </a>
          </li>
          {socials
            .filter((s) => s.kind === 'linkedin' || s.kind === 'github')
            .map((s) => (
              <li key={s.kind}>
                <a href={s.href} target="_blank" rel="noreferrer" className="channel">
                  <Icon name={s.kind} />
                  <span>
                    <span className="channel__label">{s.label}</span>
                    {s.href.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')}
                  </span>
                </a>
              </li>
            ))}
          <li className="channel channel--static">
            <Icon name="pin" />
            <span>
              <span className="channel__label">Localização</span>
              {profile.location}
            </span>
          </li>
        </ul>

        <form className="form" onSubmit={onSubmit}>
          <div className="form__row">
            <label>
              Nome
              <input name="name" type="text" required autoComplete="name" maxLength={120} />
            </label>
            <label>
              E-mail
              <input name="email" type="email" required autoComplete="email" maxLength={200} />
            </label>
          </div>
          <label>
            Mensagem
            <textarea name="message" required rows={6} maxLength={5000} />
          </label>
          <label className="form__trap" aria-hidden="true">
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>

          <div className="form__footer">
            <button type="submit" className="button button--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>
            <p className="form__status" role="status" aria-live="polite">
              {status === 'sent' && 'Mensagem enviada! Respondo assim que possível.'}
              {status === 'error' && (
                <>
                  Não foi possível enviar agora. Tente pelo <a href={`mailto:${profile.email}`}>e-mail</a>.
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}
