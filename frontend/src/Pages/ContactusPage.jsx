import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import Footer2 from '../Components/Footer/Footer'
import contact from './contact.svg';


export default function ContactusPage() {
  return (
    <>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div className="container ">
        <h1 className='alignCentre mt-4 '>Get In Touch With Us</h1>
    <div className="row mt-4">
    <div className="col-lg-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2514128333037!2d74.54053047511263!3d22.904095879256985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3961147f09d36c0b%3A0x78661a460eee5e06!2sHotel%20Amar%20Shanti!5e0!3m2!1sen!2sin!4v1699623167539!5m2!1sen!2sin"
        className='col-12' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
                       
        <div className=" card col-lg-4 p-3 m-1 position_style_card">
             <div className='alignCentre heading'>Contact Us </div>
           <br></br>
           <img src={contact}  className='img_control_hidden col-lg-6 col-sm-2'/>
           <h2 className=''>Address</h2>
           <div className='fnt-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque dignissimos perferendis exercitationem, consequatur quae.</div>
           <br></br>
           <h2 className=''>Phone No </h2>
           <div className='fnt-description'>+91 1212121212</div>
        </div>
      
       
    </div>
      </div>
      <Footer2/>
      </>
  )
}
