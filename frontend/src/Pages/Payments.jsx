import React from 'react'
import GooglePayButton from '@google-pay/button-react';

export default function Payments() {
  return (
   <>
   <br></br>
   <br></br>
   <br></br>
   <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body text-center">
            <h2 class="card-title mb-4">Donate 🤝</h2>
            <p class="card-text">"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</p>
            <p class="card-text">"Happiness doesn't result from what we get, but from what we give." - Ben Carson</p>
           
            <button class="btn background-clr btn-lg btn-block">Pay with GPay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}
