import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import API_URL from '../../_helper';
import { useNavigate } from 'react-router-dom';


export default function VolunteerRegistrationForm() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
      console.log(data);
      let BMI = data.weight/((data.height/100)^2)
      if (BMI > 18.5 && data.abled =='yes'){
        axios.post(`${API_URL}/volunteers`,data)
        .then(res=>{
          console.log(res.status);
          navigate(`/volunteereligibility?eligible=${res.data.position}`);
        console.log(res.data.position)
          window.alert("Your Volunteer data has been recorded successfully we will contact you for further process");
        })
      }
     else{
          window.alert("You are not in Fit position to apply")
     }
    };
  
    return (
      <div className="container mt-5">
        <h3 className=''>Volunteer registration Form</h3>
        <h6>You should have healthy BMI to register</h6>
        <br></br>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="name_" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" {...register('name_')} />
          </div>
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="pinCode" className="form-label">
              Pin Code
            </label>
            <input type="text" className="form-control" id="pinCode" {...register('pinCode')} />
          </div>
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="email" className="form-label ">
              Email
            </label>
            <input type="email" className="form-control" id="email" {...register('email')} />
          </div>
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input type="tel" className="form-control" id="mobile" {...register('mobile')} />
          </div>
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="qualification" className="form-label">
              Highest Educational Qualification
            </label>
            <select className="form-control" id="qualification" {...register('qualification')}>
              <option value="10thpass">10th Pass</option>
              <option value="12thpass">12th Pass</option>
              <option value="graduate">Graduate</option>
              <option value="master">Master</option>
              <option value="postgraduate">PhD</option>
            </select>
          </div>
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="experience" className="form-label">
              Experience in Management (in years)
            </label>
            <input type="number" className="form-control" id="managementExperience" {...register('experience')} />
          </div>
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="researchExperience" className="form-label">
              Have any Research Experience?
            </label>
            <select className="form-control" id="researchExperience" {...register('researchExperience')}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="confidence" className="form-label">
              How confident are you for public speaking?
            </label>
            <select className="form-control" id="confidence" {...register('confidence')}>
              <option value="notConfident">Not Confident Enough</option>
              <option value="confident">Confident</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>

          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="abled" className="form-label">
              You are able to walk and carry out tasks as required?
            </label>
            <select className="form-control" id="abled" {...register('abled')}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="weight" className="form-label">
              Your Body Weight (in kg)
            </label>
            <input type="number" className="form-control" id="weight" {...register('weight')} />
          </div>

          <div className="mb-3 col-lg-6 col-md-5 col-sm-12">
            <label htmlFor="height" className="form-label">
              Your Height (in cm)
            </label>
            <input type="number" className="form-control" id="height" {...register('height')} />
          </div>
          <div className="col-12"></div>
          {/* <div className="col"></div> */}
          <button type="submit" className=" btn btn-primary col-lg-2 col-md-4 col-sm-4">
            Submit
          </button>
          </div>
        </form>
      </div>
    );
}
