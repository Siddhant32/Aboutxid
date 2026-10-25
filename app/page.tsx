'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Menu, MoveUpRight, X } from 'lucide-react'

const projects = [
  { number: '01', title: 'Lumora Fashion', type: 'UI/UX · E-COMMERCE · FRONT-END', description: 'A considered shopping experience shaped around quiet confidence, tactile browsing and a clear visual rhythm.', year: '2025', className: 'project-lumora' },
  { number: '02', title: 'Annual Function QR Entry', type: 'WEB APP · QR SCANNER · FIREBASE', description: 'A frictionless event-entry system that turns a crowded check-in moment into a calm, instant interaction.', year: '2024', className: 'project-qr' },
  { number: '03', title: 'Smart Residency', type: 'WEB APPLICATION · UI/UX · PHP / MYSQL', description: 'A digital issue-management platform connecting residents, staff and administrators in one shared space.', year: '2024', className: 'project-residency' },
  { number: '04', title: 'Selected Portfolio', type: 'UI/UX · FRONT-END · MOTION', description: 'An evolving personal playground for visual storytelling, interface experiments and thoughtful code.', year: '2026', className: 'project-portfolio' },
]

const skills = ['Figma', 'Interaction design', 'React / Next.js', 'Design systems', 'JavaScript', 'Prototyping', 'PHP / MySQL', 'Motion design', 'Git / GitHub']
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

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Siddhant home">SC<span className="brand-dot">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-talk" href="mailto:hello@siddhant.design">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-trigger" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="mobile-menu"><div className="mobile-menu-links"><a href="#work" onClick={closeMenu}>Work <span>01</span></a><a href="#about" onClick={closeMenu}>About <span>02</span></a><a href="#skills" onClick={closeMenu}>Skills <span>03</span></a><a href="#contact" onClick={closeMenu}>Contact <span>04</span></a></div><p>UI/UX Designer &amp; Front-End Developer</p></div>}

      <section className="hero section-pad" id="top">
        <div className="hero-meta"><span>( 01 — 04 )</span><span>Based in India<br />Available worldwide</span></div>
        <div className="hero-copy"><p className="eyebrow reveal">UI/UX Designer <i>×</i> Front-End Developer</p><h1><span className="line reveal delay-1">I design digital</span><span className="line indent reveal delay-2">experiences</span><span className="line reveal delay-3">and build them <em>into reality.</em></span></h1></div>
        <div className="hero-art" aria-label="Interactive design, code and motion panel"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-card"><span>SC / 001</span><strong>Design<br /><i>in motion.</i></strong><small>Figma → React<br />Ideas → Interfaces</small></div><div className="art-cross">+</div></div>
        <div className="hero-footer"><p>Scroll to explore <ArrowDownRight size={17} /></p><div className="scroll-line" /><p className="hero-note">A designer who<br />knows how to code.</p></div>
      </section>

      <section className="intro section-pad" id="about"><div className="section-label"><span>02 / Introduction</span><span>About the practice</span></div><div className="intro-grid"><h2>A little about<br /><em>what I do.</em></h2><div><p className="intro-text">I enjoy turning ideas into clean, intuitive and visually engaging digital experiences. From designing interfaces in Figma to building responsive experiences with modern web technologies, I like working across both design and development.</p><a className="text-link" href="#contact">More about me <ArrowUpRight size={15} /></a></div></div></section>

      <section className="marquee" aria-label="Areas of expertise"><div className="marquee-row"><span>UI/UX Design</span><b>✳</b><span>Front-End Development</span><b>✳</b><span>Interaction Design</span><b>✳</b><span>Creative Technology</span><b>✳</b></div><div className="marquee-row reverse"><span>Motion Design</span><b>✳</b><span>Visual Systems</span><b>✳</b><span>Digital Products</span><b>✳</b><span>Motion Design</span><b>✳</b></div></section>

      <section className="work section-pad" id="work"><div className="section-label"><span>03 / Selected work</span><span>04 projects · 2024—26</span></div><div className="section-heading"><h2>Selected <em>work.</em></h2><p>A collection of things I&apos;ve designed, built and experimented with.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-visual ${project.className}`}><div className="visual-ui"><span>{project.number} / DIGITAL PRODUCT</span><div className="visual-window"><i /><i /><i /><strong>{project.title}</strong><div className="visual-bar" /><div className="visual-blocks"><b /><b /><b /></div></div></div><span className="view-pill">View <ArrowUpRight size={15} /></span></div><div className="project-info"><div><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div></div></article>)}</div></section>

      <section className="about-band section-pad"><div className="about-display"><span>Designer mindset.</span><span className="outline">Developer hands.</span></div><div className="about-lower"><div className="portrait"><div className="portrait-glow" /><span>SC<br />2026</span></div><div className="about-copy"><p>I care about the space where visual clarity meets technical possibility. Good work should feel obvious in hindsight — expressive, useful and made to last.</p><div className="stats"><div><strong>04<span>+</span></strong><small>Projects shipped</small></div><div><strong>02<span>+</span></strong><small>Years learning</small></div><div><strong>10<span>+</span></strong><small>Technologies</small></div></div></div></div></section>

      <section className="skills section-pad" id="skills"><div className="section-label"><span>04 / Capabilities</span><span>Always learning</span></div><div className="skills-layout"><h2>Tools for<br /><em>curious minds.</em></h2><div className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><ArrowUpRight size={18} /></div>)}</div></div></section>

      <section className="process section-pad"><div className="section-label"><span>05 / Process</span><span>How I work</span></div><h2>From first thought<br />to <em>final detail.</em></h2><div className="process-list">{process.map((step, index) => <div className={`process-step ${index === 0 ? 'active' : ''}`} key={step}><span>0{index + 1}</span><strong>{step}</strong><i /></div>)}</div></section>

      <section className="contact section-pad" id="contact"><div className="section-label"><span>06 / Contact</span><span>Let&apos;s make something</span></div><div className="contact-heading"><p>Have an idea?</p><h2>Let&apos;s <em>build it.</em></h2><a className="big-mail" href="mailto:hello@siddhant.design">hello@siddhant.design <ArrowUpRight /></a></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success-state"><Check size={22} /> Thanks — I&apos;ll be in touch.</div> : <><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required name="email" type="email" placeholder="you@email.com" /></label></div><label>Project type<input name="project" placeholder="What are we making?" /></label><label>Message<textarea required name="message" rows={3} placeholder="Tell me a little about it..." /></label><button className="submit-button" type="submit">Send message <ArrowUpRight size={17} /></button></>}</form></section>

      <footer className="footer section-pad"><div className="footer-top"><a className="footer-brand" href="#top">SIDDHANT<span>.</span></a><p>UI/UX Designer<br />&amp; Front-End Developer</p><a className="back-top" href="#top">Back to top <MoveUpRight size={16} /></a></div><div className="footer-bottom"><span>© 2026 Siddhant. All rights reserved.</span><div className="socials"><a href="https://github.com" aria-label="GitHub">GH</a><a href="https://linkedin.com" aria-label="LinkedIn">LI</a><a href="https://instagram.com" aria-label="Instagram">IG</a></div></div></footer>
    </main>
  )
}
