import './App.css'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import Hero from './components/Hero'
import { Services } from './components/Services'
import { TechStack } from './components/TechStack'
import { Test } from './components/Test'

function App() {

  return (
    <>
      <Hero/>
      <TechStack/>
      <Test/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
