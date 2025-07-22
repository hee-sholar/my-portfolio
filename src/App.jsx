import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePages'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Skills from './Pages/Skills'
import AboutMe from './Pages/AboutMe'
function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </BrowserRouter>
      <Footer />
    <Toaster />
    </>
  )
}

export default App
