import React from 'react'
import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Grid />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App