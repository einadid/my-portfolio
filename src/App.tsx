import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import AllProjectsPage from './pages/AllProjectsPage'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App