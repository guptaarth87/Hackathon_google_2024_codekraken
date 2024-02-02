import React from "react";
import Feedback from "../../assets/landing/feedback.svg";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  return (
    <>
      <h3 className="alignCentre  display-6 feedback_text fnt-heading">Feedback Form</h3>
      <div className="row m-3">
        
         
            <img
              className="col-lg-4 col-md-5 col-sm-12"
              src={Feedback}
             
            />
          <div className="col-lg-6 col-md-5 col-sm-12">
            <div >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label fnt-description">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control fnt-description"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fnt-description">
                  Leave Your Feedback Here
                </label>
                <textarea 
                  className="form-control fnt-description"
                  id="exampleFormControlTextarea1"
                  rows="3"></textarea>
              </div>
              <button className="btn submit_form btn_background">Submit</button>
            </div>
          </div>
        </div>

        <div className="row mt-4 "></div>
      
    </>
  );
}
