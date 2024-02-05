import React from "react";
import "./Hero.css";
// import MainHeading from "../mainHeading/MainHeading";
import HeroVedio from '../../assets/landing/HeroVideo.mp4'
import './HeroImage.css';

export default function HeroImage() {
  return (
    <>
    <br></br>
    <br></br>
   
    
   
        <div className="landing_background mt-4" id="SectionOne">
    <div className="overlay"></div>
       <video className="video_control" src={HeroVedio} autoPlay muted loop />
       <div className="contentx">
            <h1 className='font-sectionone fnt-heading'>Welcome</h1>
            <h2 className='font-sectionone fnt-heading'>To Towards Happiness </h2>
          
           <div className="container">
            <h2 className='alignCentre font-sectionone fnt-heading'>"Unite for Impact, Volunteer for Change. Your Power, Our Community"</h2>
            </div>
            
        </div>
       
       </div>
    </>
  );
}
