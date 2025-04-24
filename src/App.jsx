import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Collections from './pages/Collections'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
