

import Footer from "./components/Footer.jsx"
import Hero from "./components/Main"
import Navbar from "./components/Navbar"
import Ourfounder from "./components/ourFounder.jsx"
import Pricing from "./components/Pricing.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Project from "./components/Project.jsx"
import { FAQSection } from "./components/FAQ.jsx"
export const App=()=>{
  return(
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>}></Route> 
          <Route path="/founder" element={<Ourfounder/>}></Route> 
          <Route path="/pricing" element={<Pricing/>}></Route> 
          <Route path="/project" element={<Project/>}></Route> 
          <Route path="/faq" element={<FAQSection/>}></Route> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )

}