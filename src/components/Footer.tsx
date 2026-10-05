import { profile, socials } from '../data/portfolio'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Feito com React, TypeScript e Vite.
        </p>
        <ul className="socials socials--small" aria-label="Redes sociais">
          {socials.map((s) => (
            <li key={s.kind}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                <Icon name={s.kind} size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
