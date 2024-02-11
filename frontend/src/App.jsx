import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes ,  Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer/Footer';
import Events from './Pages/Events';
import ContactusPage from './Pages/ContactusPage';
import VolunteerRegistration from './Pages/VolunteerRegistration';
import Navbar from './Components/Navigation/Navbar';

function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<LandingPage/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/contact' element={<ContactusPage/>} />
      <Route path='/registervolunteer' element={<VolunteerRegistration/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
