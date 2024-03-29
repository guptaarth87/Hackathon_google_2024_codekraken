import React,{useEffect} from "react";
import Navbar from "../Components/Navigation/Navbar";
import Hero from "../Components/Hero/Hero";
import FeedbackForm from "../Components/FeedbackForm/FeedbackForm";
import Faqs from "../Components/FAQs/Faqs";
import Tagline from "../Components/TagLine/Tagline";
import ReactGA from 'react-ga4';
// import FoodDrive from "../assets/landing/fooddrive.jpg";
// import PlantationDrive from "../assets/landing/plantationdrive.jpeg";
// import MainHeading from "../Components/mainHeading/MainHeading";
import HeroImage from "../Components/Hero/HeroImage"; 
// import AboutUs from "../Components/about/AboutUs";
import Vision from "../Components/Vision/Vision.jsx";
import Donate from '../assets/landing/donate.jpeg';


export default function LandingPage() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/landingpage", title: "website visit" });
    // ReactGA.pageview(window.location.pathname);
  }, [])
  return (
    <>
      
      <HeroImage />
      <div className="container">
        
        <Tagline />
        {/* <img src={Donate} className="img-control"/> */}
        <Hero />
        <Vision />
        <Faqs />
        <FeedbackForm />
      </div>
      {/* <AboutUs /> */}
    </>
  );
}
