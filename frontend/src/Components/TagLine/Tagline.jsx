import React from "react";
import TaglineDiv from '../../assets/landing/taglineDiv.png';
import './Tagline.css'
export default function Tagline() {
  return (
    <>
    <div >
     <div className="row margin " >

        <img className="sectiontwo_div " src={TaglineDiv} />
        
        <div style={{position:"absolute"}} className=" col-lg-10 col-md-9 col-sm-8 alignCentre text_div_mission">
        <h2  className="  white  m-5 sectiontwo_text fnt-heading "> Empowering Today, Envisioning Tomorrow: Our NGO is committed to championing the cause of humanity, fostering positive change, and leaving an indelible mark on the world.</h2>
          </div>
          </div>
     </div>
      <div className="row mt-4 mb-4">
        <h1 className="alignCentre display-4 ">
         
        </h1>
      </div>
    </>
  );
}
