import Footer from "./components/Footer.jsx"
import Hero from "./components/Main"
import Navbar from "./components/Navbar"
import Ourfounder from "./components/Ourfounder.jsx"
import Pricing from "./components/Pricing.jsx"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Project from "./components/Project.jsx"
import { FAQSection } from "./components/FAQ.jsx"
import { useEffect } from "react"

// Wrapper component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' for no animation, 'smooth' for smooth scroll
    })
  }, [pathname])

  return null
}

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ScrollToTop />
          
          {/* Main content wrapper with flex-grow to push footer down */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/founder" element={<Ourfounder />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/project" element={<Project />} />
              <Route path="/faq" element={<FAQSection />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}