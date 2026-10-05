import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  kicker: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, kicker, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section__header">
          <p className="kicker">{kicker}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
