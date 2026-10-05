import { certificateGroups, education, keyCertificates } from '../data/portfolio'
import { Icon } from './Icon'
import { Section } from './Section'

export function Education() {
  const totalCourses = certificateGroups.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <Section id="formacao" kicker="Formação" title="Formação e certificações">
      <div className="education">
        {education.map((item) => (
          <article key={item.course} className="education__item">
            <p className="education__period">{item.period}</p>
            <h3>{item.course}</h3>
            <p className="education__school">{item.school}</p>
          </article>
        ))}
      </div>

      <h3 className="subheading">Certificações</h3>
      <ul className="certs">
        {keyCertificates.map((cert) => (
          <li key={cert.name}>
            <a href={cert.url} target="_blank" rel="noreferrer" className="cert">
              <Icon name="award" size={22} className="cert__icon" />
              <span>
                <strong>{cert.name}</strong>
                <span className="cert__issuer">{cert.issuer}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="subheading">
        Cursos <span className="subheading__count">{totalCourses}</span>
      </h3>
      <div className="courses">
        {certificateGroups.map((group) => (
          <details key={group.title} className="courses__group">
            <summary>
              {group.title}
              <span className="courses__count">{group.items.length}</span>
              <Icon name="chevron" size={18} className="courses__chevron" />
            </summary>
            <ul>
              {group.items.map((course) => (
                <li key={course.name}>
                  <a href={course.url} target="_blank" rel="noreferrer">
                    {course.name}
                  </a>
                  <span className="courses__issuer">{course.issuer}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </Section>
  )
}
