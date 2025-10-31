import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Partners from "./pages/Partners"
import Mission from "./pages/Mission"
import Challenges from "./pages/Challenges"

import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="partners" element={<Partners />} />
          <Route path="newPartners" element={<Partners />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="mission" element={<Mission />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
