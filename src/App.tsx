import { BrowserRouter, Route, Routes } from "react-router-dom"

import homeStyles from "./pages/Home.module.css"

import Home from "./pages/Home"
import Partners from "./pages/Partners"
import Us from "./pages/Us"
import Challenges from "./pages/Challenges"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className={`main-content ${location.pathname === "/" ? homeStyles.homeMainContent : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="partners" element={<Partners />} />
            <Route path="newPartners" element={<Partners />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="us" element={<Us />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App
