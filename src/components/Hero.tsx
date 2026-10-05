import photo from '../assets/victor-vaz.jpg'
import { profile, socials } from '../data/portfolio'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.role} · {profile.location}
          </p>
          <h1 className="hero__title">
            Olá, eu sou o <span className="accent">{profile.name}</span>.
          </h1>
          <p className="hero__lead">{profile.headline}</p>

          <div className="hero__cta">
            <a href="#projetos" className="button button--primary">
              Ver projetos <Icon name="arrowDown" size={18} />
            </a>
            <a href={profile.resume} className="button" download>
              Baixar currículo <Icon name="download" size={18} />
            </a>
          </div>

          <ul className="socials" aria-label="Redes sociais">
            {socials.map((s) => (
              <li key={s.kind}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <Icon name={s.kind} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__photo">
          <img src={photo} alt="Foto de Victor Vaz" width={320} height={320} />
        </div>
      </div>

      <div className="container">
        <ul className="highlights">
          {profile.highlights.map((h) => (
            <li key={h.value}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
