import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import Hero from '../Components/Hero/Hero'
import FeedbackForm from '../Components/FeedbackForm/FeedbackForm'
import Faqs from '../Components/FAQs/Faqs'
import Tagline from '../Components/TagLine/Tagline'

import FoodDrive from '../assets/landing/fooddrive.jpg'
import PlantationDrive from '../assets/landing/plantationdrive.jpeg'

export default function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Hero/>
    <Tagline />
    <div className="row mt-4">
      <img className="col-lg-4 col-md-5 col-sm-12" src = {FoodDrive} />
      <div className="col-lg-6 col-md-5 col-sm-12"><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet maiores dignissimos dolore facilis a blanditiis sed voluptatibus nulla assumenda?</h3></div>
    </div>

    <div className="row mt-4">
      
      <div className="col-lg-6 col-md-5 col-sm-12"><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet maiores dignissimos dolore facilis a blanditiis sed voluptatibus nulla assumenda?</h3></div>
      <img className="col-lg-4 col-md-5 col-sm-12" src = {PlantationDrive} />
    </div>
    <Faqs/>
    <FeedbackForm/>
    </div>
    </>
  )
}
