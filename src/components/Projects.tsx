import { useState } from 'react'
import {
  featuredProjects,
  projectCategories,
  projects,
  type FeaturedProject,
  type Link,
  type Project,
  type ProjectCategory,
} from '../data/portfolio'
import { Icon, type IconName } from './Icon'
import { Section } from './Section'

const linkIcon: Record<Link['kind'], IconName> = {
  code: 'github',
  demo: 'globe',
  site: 'globe',
  video: 'play',
}

function LinkList({ links, className = 'links' }: { links: Link[]; className?: string }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer" className="link">
            <Icon name={linkIcon[link.kind]} size={16} />
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function InstallSnippet({ lines }: { lines: string[] }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Sem permissão de clipboard: o texto continua visível para copiar à mão.
    }
  }

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <button type="button" className="terminal__copy" onClick={copy} aria-label="Copiar comandos de instalação">
          <Icon name={copied ? 'check' : 'copy'} size={14} />
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </div>
      <pre>
        <code>
          {lines.map((line) => (
            <span key={line} className="terminal__line">
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

function FeaturedCard({ project }: { project: FeaturedProject }) {
  return (
    <article className={`featured featured--${project.id}`}>
      <header className="featured__header">
        <div className="featured__badges">
          {project.role && <span className="badge badge--accent">{project.role}</span>}
          {project.badge && <span className="badge">{project.badge}</span>}
        </div>
        <h3>{project.name}</h3>
        <p className="featured__tagline">{project.tagline}</p>
      </header>

      <ul className="featured__points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {project.install && <InstallSnippet lines={project.install} />}

      <footer className="featured__footer">
        <ul className="chips chips--small">
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        <LinkList links={project.links} />
      </footer>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      {project.image ? (
        <div className="card__media">
          <div className="phone">
            <img src={project.image} alt={`Tela do app ${project.name}`} loading="lazy" width={360} height={720} />
          </div>
        </div>
      ) : (
        <div className="card__media card__media--code" aria-hidden="true">
          <Icon name="code" size={28} />
          <span>{project.stack.slice(0, 2).join(' + ')}</span>
        </div>
      )}
      <div className="card__body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p className="card__stack">{project.stack.join(' · ')}</p>
        <LinkList links={project.links} />
      </div>
    </article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section
      id="projetos"
      kicker="Projetos"
      title="O que tenho construído"
      intro="Três projetos que mostram como eu trabalho hoje, seguidos do restante do que está no meu GitHub."
    >
      <div className="featured-grid">
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.id} project={project} />
        ))}
      </div>

      <h3 className="subheading">Mais projetos</h3>
      <div className="filters" role="group" aria-label="Filtrar projetos por categoria">
        {projectCategories.map((cat) => {
          const count = cat.id === 'all' ? projects.length : projects.filter((p) => p.category === cat.id).length
          return (
            <button
              key={cat.id}
              type="button"
              className="filter"
              aria-pressed={filter === cat.id}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label} <span className="filter__count">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="card-grid">
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <p className="more">
        <a href="https://github.com/victorvazdev?tab=repositories" target="_blank" rel="noreferrer" className="link">
          Ver todos os repositórios no GitHub <Icon name="arrowUpRight" size={16} />
        </a>
      </p>
    </Section>
  )
}
