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
      <div className="container ">
        <h1 className='alignCentre mt-4 '>Get In Touch With Us</h1>
    <div className="row mt-4">
    <div className="col-lg-7">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5033388570578!2d75.8080932!3d22.635014599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fbe28cb4b0bf%3A0xf8969bb46198c6f2!2sSai%20Vihar%20Colony%2C%20Rau%2C%20Indore%2C%20Madhya%20Pradesh%20453331!5e0!3m2!1sen!2sin!4v1707933614282!5m2!1sen!2sin"
        className='col-12' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
                       
        <div className=" card col-lg-4 p-3 m-1 position_style_card">
             <h3 className='alignCentre heading'>Contact Us </h3>
           <br></br>
           <img src={contact}  className='img_control_hidden col-lg-6 col-sm-2'/>
           <h4 className=''>Address</h4>
           <div className='fnt-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque dignissimos perferendis exercitationem, consequatur quae.</div>
           <br></br>
           <h4 className=''>Phone No </h4>
           <div className='fnt-description'>+91 1212121212</div>
        </div>
      
       
    </div>
      </div>
      <Footer2/>
      </>
  )
}
