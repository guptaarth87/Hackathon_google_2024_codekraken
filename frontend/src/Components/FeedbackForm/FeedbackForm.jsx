import React from 'react'
import Feedback from '../../assets/landing/feedback.svg'
export default function FeedbackForm() {
  return (
    <>
    <div className="row mt-4">
        <h3 className="alignCentre">Feedback Form</h3>
        <img className="col-lg-4 col-md-5 col-sm-12" src={Feedback} />
        <div className="col-lg-6 col-md-5 col-sm-12">
         <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button className="btn btn-success">Submit</button>
        </div>
        
    </div>
    </>
  )
}
