import React from "react";
import Feedback from "../../assets/landing/feedback.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./FeedbackForm.css";
import API_URL from "../../_helper";

export default function FeedbackForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send a POST request using Axios
      const response = await axios.post(`${API_URL}/queries`, data);
      console.log("Response:", response.data);
      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h3 className="alignCentre display-6 feedback_text fnt-heading">
        Feedback Form
      </h3>
      <div className="row m-3">
        <img className="col-lg-4 col-md-5 col-sm-12" src={Feedback} alt="Feedback" />
        <div className="col-lg-6 col-md-5 col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fnt-description">
                Email address
              </label>
              <input
                type="email"
                className="form-control fnt-description"
                id="email"
                placeholder="name@example.com"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="query" className="form-label fnt-description">
                Leave Your Feedback Here
              </label>
              <textarea
                className="form-control fnt-description"
                id="feedback"
                rows="3"
                {...register("query", { required: true })}
              ></textarea>
            </div>
            <button type="submit" className="btn submit_form btn_background">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-4 "></div>
    </>
  );
}
