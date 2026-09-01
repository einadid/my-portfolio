import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { scrollToSection } from './lib/utils'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/ui/BackToTop'
import { Backdrop } from './components/ui/Backdrop'
import Home from './pages/Home'
import AllProjectsPage from './pages/AllProjectsPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import NotFoundPage from './pages/NotFoundPage'

/** Fresh page loads scroll to the top, except when the URL carries a #section. */
function ScrollRestore() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    const id = setTimeout(() => scrollToSection(hash.slice(1)), 220)
    return () => clearTimeout(id)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Backdrop />
      <ScrollRestore />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
