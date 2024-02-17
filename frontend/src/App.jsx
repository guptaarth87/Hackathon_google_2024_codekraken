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
import ScrollToTop from './ScrollToTop';
import GallaryPage from './Pages/GallaryPage';
import Payments from './Pages/Payments';
import VolunteeringEligibility from './Components/VolunteerEligibility/VolunteerEligibility';

function App() {
  

  return (
    <>
    <Navbar/>
    <ScrollToTop/>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<LandingPage/>} />
      <Route path='/gallery' element={<GallaryPage/>}/>
      <Route path='/payment' element={<Payments/>}/>
      <Route path='/events' element={<Events/>} />
      <Route path='/contact' element={<ContactusPage/>} />
      <Route path='/registervolunteer' element={<VolunteerRegistration/>} />
      <Route path='/volunteereligibility' element={<VolunteeringEligibility/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
