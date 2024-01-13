import React from 'react'
import HeroImg from '../../assets/landing/hero-img.jpg';

export default function hero() {
  return (
    <>
    <div className="row">
    <h3 className='col-lg-6 col-md-5 col-sm-12 mt-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Ducimus, iure fugiat. Odio error ut quis cum magni commodi  
        cupiditate quaerat. Rem, officia vel?
    <br></br>
    <br></br>
    <button className='btn btn-secondary'>Events Info </button>
    </h3>
   
    <img className='col-lg-4 col-md-5 col-sm-10' src={HeroImg} />
    </div>
    </>
  )
}
