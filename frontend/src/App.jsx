import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes ,  Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer/Footer';
import Events from './Pages/Events';
import ContactusPage from './Pages/ContactusPage';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<LandingPage/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/contact' element={<ContactusPage/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
