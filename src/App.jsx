
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Footer } from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import { NavBar } from './components/NavBar'
import { Services } from './components/Services'
import { TechStack } from './components/TechStack'
import { Test } from './components/Test'
import './App.css'
/* import { Gallery } from './components/Gallery'; */

function App() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/' element={<TechStack />} />
          <Route path='/' element={<Test />} />
          <Route path='/' element={<Services />} />
        </Routes>
      </Router>
      <TechStack />
      <Test />
      <Services />
      {/* <Gallery/> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
