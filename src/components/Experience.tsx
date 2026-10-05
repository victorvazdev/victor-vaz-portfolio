import { experiences } from '../data/portfolio'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experiencia"
      kicker="Experiência"
      title="Liderança antes do código"
      intro="Além da liderança técnica na Ruraliza, coordenei equipes de mídia e comunicação — organizando pessoas, prazos e entregas."
    >
      <ol className="timeline">
        {experiences.map((exp) => (
          <li key={exp.org} className="timeline__item">
            <div className="timeline__meta">
              <span className="timeline__period">{exp.period}</span>
            </div>
            <div className="timeline__content">
              <h3>{exp.role}</h3>
              <p className="timeline__org">{exp.org}</p>
              <ul>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
