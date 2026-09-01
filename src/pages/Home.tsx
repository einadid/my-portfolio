import Hero from '../components/Hero'
import ProjectsSection from '../components/Projects/ProjectsSection'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Journey from '../components/Journey'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <Services />
      <Skills />
      <Journey />
      <About />
      <Contact />
    </>
  )
}
