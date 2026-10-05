import { profile, skills } from '../data/portfolio'
import { Section } from './Section'

export function About() {
  return (
    <Section id="sobre" kicker="Sobre mim" title="Do contrato da API ao pixel na tela">
      <div className="about">
        <div className="about__text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about__languages">
            <strong>Idiomas:</strong> Português (nativo) · Inglês (intermediário — B1 CEFR)
          </p>
        </div>

        <div className="skills">
          {skills.map((group) => (
            <div key={group.title} className="skills__group">
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
