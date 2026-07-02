import './index.css'
import MatrixRain from './components/MatrixRain'
import ParticleField from './components/ParticleField'
import MouseGlow from './components/MouseGlow'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import TimelineSection from './components/TimelineSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'oklch(0.09 0.02 265)', minHeight: '100vh', position: 'relative' }}>
      <MatrixRain />
      <ParticleField />
      <MouseGlow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
