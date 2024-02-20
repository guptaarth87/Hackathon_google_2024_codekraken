import React from 'react';

export default function DetailsCards({ name, details, story }) {
    return (
        <div className="container mt-5">
          <div className="row justify-content-center ">
            <div className="col-md-6 ">
              <div className="card background-clr ">
                <div className="card-body">
                  <h5 className="card-title white">{name}</h5>
                  {Object.keys(details).map(key => (
                    <p key={key} className="card-text white">{key}: {details[key]}</p>
                  ))}
                  <hr />
                  <p className="card-text white">Short Story:</p>
                  <p className="card-text white">{story}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
