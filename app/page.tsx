'use client'

import { useEffect, useState, type PointerEvent } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Menu, MoveUpRight, X } from 'lucide-react'

const projects = [
  { number: '01', title: 'Zyphr', type: 'WEB PRODUCT · UI/UX · FRONT-END', description: 'A polished digital product experience built around clarity, speed and a confident visual system.', year: '2026', className: 'project-lumora', url: 'https://zyphr-nine.vercel.app' },
  { number: '02', title: 'Health Vault', type: 'WEB APP · HEALTHCARE · UI/UX', description: 'A focused health-management interface that makes important information feel calm, accessible and easy to navigate.', year: '2026', className: 'project-qr', url: 'https://health-vault-ufhd.vercel.app' },
  { number: '03', title: 'Registration', type: 'WEB APP · FORMS · FRONT-END', description: 'A streamlined registration flow designed to make collecting details simple, clear and frictionless.', year: '2026', className: 'project-residency', url: 'https://registration-six-self.vercel.app' },
  { number: '04', title: 'Selected Portfolio', type: 'UI/UX · FRONT-END · CREATIVE CODE', description: 'An evolving personal playground for visual storytelling, interface experiments and thoughtful code.', year: '2026', className: 'project-portfolio', url: '#top' },
]

const skills = ['Figma', 'Interaction design', 'React / Next.js', 'Design systems', 'JavaScript', 'Prototyping', 'Git / GitHub']
const education = [
  ['2023—2026', 'Diploma in Computer Engineering', 'Government Polytechnic Thane'],
  ['2025', 'Industrial Training in Web Development', 'V2V Edutech Limited'],
  ['2026—2029', 'BTech in Computer Science Engineering', 'Universal Skilltech University'],
]
const process = ['Discover', 'Research', 'Define', 'Design', 'Prototype', 'Build', 'Refine']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const handleTilt = (event: PointerEvent<HTMLElement>) => {
    const element = event.currentTarget
    const bounds = element.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    element.style.setProperty('--pointer-x', `${x * 16}px`)
    element.style.setProperty('--pointer-y', `${y * 16}px`)
  }
  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--pointer-x', '0px')
    event.currentTarget.style.setProperty('--pointer-y', '0px')
  }
  const handleBackgroundPointer = (event: PointerEvent<HTMLElement>) => {
    document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
    document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
  }

  return (
    <main className="site-shell" onPointerMove={handleBackgroundPointer}>
      <div className="grain" aria-hidden="true" /><div className="cursor-gradient" aria-hidden="true" />
      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Siddhant home">xid<span className="brand-dot">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-talk" href="mailto:siddhantchandanshiv07@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-trigger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="mobile-menu"><div className="mobile-menu-links"><a href="#work" onClick={closeMenu}>Work <span>01</span></a><a href="#about" onClick={closeMenu}>About <span>02</span></a><a href="#skills" onClick={closeMenu}>Skills <span>03</span></a><a href="#contact" onClick={closeMenu}>Contact <span>04</span></a></div><p>UI/UX Designer &amp; Front-End Developer</p></div>}

      <section className="hero section-pad" id="top">
        <div className="hero-meta"><span>( 01 — 04 )</span><span>Based in India<br />Available worldwide</span></div>
        <div className="hero-copy"><p className="eyebrow reveal">UI/UX Designer <i>×</i> Front-End Developer</p><h1><span className="line reveal delay-1">I design digital</span><span className="line indent reveal delay-2">experiences</span><span className="line reveal delay-3">and build them <em>into reality.</em></span></h1></div>
        <div className="hero-art" aria-label="Interactive design, code and motion panel" onPointerMove={handleTilt} onPointerLeave={resetTilt}><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-card"><span>SC / 001</span><strong>Design<br /><i>in motion.</i></strong><small>Figma → React<br />Ideas → Interfaces</small></div><div className="art-cross">+</div></div>
        <div className="hero-footer"><p>Scroll to explore <ArrowDownRight size={17} /></p><div className="scroll-line" /><p className="hero-note">A designer who<br />knows how to code.</p></div>
      </section>

      <section className="intro section-pad" id="about"><div className="section-label"><span>02 / Introduction</span><span>About the practice</span></div><div className="intro-grid"><h2>A little about<br /><em>what I do.</em></h2><div><p className="intro-text">I enjoy turning ideas into clean, intuitive and visually engaging digital experiences. From designing interfaces in Figma to building responsive experiences with modern web technologies, I like working across both design and development.</p><a className="text-link" href="#contact">More about me <ArrowUpRight size={15} /></a></div></div></section>

      <section className="marquee" aria-label="Areas of expertise"><div className="marquee-row"><span>UI/UX Design</span><b>✳</b><span>Front-End Development</span><b>✳</b><span>Interaction Design</span><b>✳</b><span>Creative Technology</span><b>✳</b></div><div className="marquee-row reverse"><span>Motion Design</span><b>✳</b><span>Visual Systems</span><b>✳</b><span>Digital Products</span><b>✳</b><span>Motion Design</span><b>✳</b></div></section>

      <section className="work section-pad" id="work"><div className="section-label"><span>03 / Selected work</span><span>04 projects · 2024—26</span></div><div className="section-heading"><h2>Selected <em>work.</em></h2><p>A collection of things I&apos;ve designed, built and experimented with.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-visual ${project.className}`} onPointerMove={handleTilt} onPointerLeave={resetTilt}><div className="visual-ui"><span>{project.number} / DIGITAL PRODUCT</span><div className="visual-window"><i /><i /><i /><strong>{project.title}</strong><div className="visual-bar" /><div className="visual-blocks"><b /><b /><b /></div></div></div><a className="view-pill" href={project.url} target={project.url.startsWith('#') ? undefined : '_blank'} rel={project.url.startsWith('#') ? undefined : 'noreferrer'}>View <ArrowUpRight size={15} /></a></div><div className="project-info"><div><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div></div></article>)}</div></section>

      <section className="about-band section-pad"><div className="about-display"><span>Designer mindset.</span><span className="outline">Developer hands.</span></div><div className="about-lower"><div className="portrait"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-25%20at%207.39.02%20PM-2fFsrMNCu3prgfK7KvJSesxooxAE2a.jpeg" alt="Siddhant wearing a black suit" /><span>xid<br />2026</span></div><div className="about-copy"><p>I care about the space where visual clarity meets technical possibility. Good work should feel obvious in hindsight — expressive, useful and made to last.</p><div className="stats"><div><strong>04<span>+</span></strong><small>Projects shipped</small></div><div><strong>02<span>+</span></strong><small>Years learning</small></div><div><strong>10<span>+</span></strong><small>Technologies</small></div></div></div></div></section>

      <section className="skills section-pad" id="skills"><div className="section-label"><span>04 / Capabilities</span><span>Always learning</span></div><div className="skills-layout"><h2>Tools for<br /><em>curious minds.</em></h2><div className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><ArrowUpRight size={18} /></div>)}</div></div></section>

      <section className="education section-pad" id="education"><div className="section-label"><span>05 / Education</span><span>Learning in progress</span></div><div className="education-heading"><h2>Built on<br /><em>curiosity.</em></h2><p>My academic path combines engineering fundamentals, practical training and a growing focus on computer science.</p></div><div className="education-list">{education.map(([period, title, school]) => <div className="education-item" key={title}><span>{period}</span><div><h3>{title}</h3><p>{school}</p></div><ArrowUpRight size={18} /></div>)}</div></section>

      <section className="process section-pad"><div className="section-label"><span>06 / Process</span><span>How I work</span></div><h2>From first thought<br />to <em>final detail.</em></h2><div className="process-list">{process.map((step, index) => <div className={`process-step ${index === 0 ? 'active' : ''}`} key={step}><span>0{index + 1}</span><strong>{step}</strong><i /></div>)}</div></section>

      <section className="contact section-pad" id="contact"><div className="section-label"><span>07 / Contact</span><span>Let&apos;s make something</span></div><div className="contact-heading"><p>Have an idea?</p><h2>Let&apos;s <em>build it.</em></h2><a className="big-mail" href="mailto:siddhantchandanshiv07@gmail.com">siddhantchandanshiv07@gmail.com <ArrowUpRight /></a></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success-state"><Check size={22} /> Thanks — I&apos;ll be in touch.</div> : <><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required name="email" type="email" placeholder="you@email.com" /></label></div><label>Project type<input name="project" placeholder="What are we making?" /></label><label>Message<textarea required name="message" rows={3} placeholder="Tell me a little about it..." /></label><button className="submit-button" type="submit">Send message <ArrowUpRight size={17} /></button></>}</form></section>

      <footer className="footer section-pad"><div className="footer-top"><a className="footer-brand" href="#top">SIDDHANT<span>.</span></a><p>UI/UX Designer<br />&amp; Front-End Developer</p><a className="back-top" href="#top">Back to top <MoveUpRight size={16} /></a></div><div className="footer-bottom"><span>© 2026 Siddhant. All rights reserved.</span><div className="socials" aria-label="Social links"><a href="https://github.com/Siddhant32" target="_blank" rel="noreferrer" aria-label="GitHub"><b aria-hidden="true">GH</b><span>GitHub</span></a><a href="https://linkedin.com/in/siddhant-chandanshiv-7b31b5311" target="_blank" rel="noreferrer" aria-label="LinkedIn"><b aria-hidden="true">in</b><span>LinkedIn</span></a><a href="https://pin.it/7yAYosuFm" target="_blank" rel="noreferrer" aria-label="Pinterest"><b aria-hidden="true">P</b><span>Pinterest</span></a><a href="mailto:siddhantchandanshiv07@gmail.com" aria-label="Email"><b aria-hidden="true">@</b><span>Email</span></a><a className="instagram-qr" href="https://www.instagram.com/xid.raw/" target="_blank" rel="noreferrer" aria-label="Instagram"><div className="qr-placeholder" aria-label="Instagram QR code placeholder">QR</div><span><b aria-hidden="true">◎</b> XID.RAW</span></a></div></div></footer>
    </main>
  )
}
