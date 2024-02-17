import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const VolunteeringEligibility = () => {

    const location = useLocation();
  const [eligible, setEligible] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const eligibleParam = searchParams.get('eligible');
    setEligible(eligibleParam);
  }, [location.search]);


  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="card-title">Volunteering Eligibility</h2>
            <h4 className="card-text">
              According to our analyzer, your profile is eligible for <strong>{eligible}-related</strong> volunteering work. Further, we will contact you for verification.
            </h4>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default VolunteeringEligibility;
