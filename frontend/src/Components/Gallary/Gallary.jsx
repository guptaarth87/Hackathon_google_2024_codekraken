import React from 'react'

export default function Gallary() {
  return (
   <>
    <section id="gallery-section" class="mt-5 mb-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-5">
          <h2 class="display-4">Towards Happiness: Empowering Lives</h2>
          <p class="lead">
            Together, let's make a difference. We at Towards Happiness organize regular initiatives to bring positive change in people's lives through:
          </p>
          <ul class="list-group list-group-flush justify-content-center">
            <li class="list-group-item">Educational Workshops</li>
            <li class="list-group-item">Food Distribution Drives</li>
            <li class="list-group-item">Plantation Drives</li>
          </ul>
        </div>

        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card shadow-sm">
            <img src="https://via.placeholder.com/300" alt="Educational Workshop" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Educational Workshops</h5>
              <p class="card-text">We provide practical skill-building workshops to empower individuals and communities.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card shadow-sm">
            <img src="https://via.placeholder.com/300" alt="Food Distribution Drive" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Food Distribution Drives</h5>
              <p class="card-text">We conduct food drives to address hunger and ensure basic needs are met in our communities.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card shadow-sm">
            <img src="https://via.placeholder.com/300" alt="Plantation Drive" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Plantation Drives</h5>
              <p class="card-text">We organize plantation drives to promote environmental sustainability and green spaces.</p>
            </div>
          </div>
        </div>

        <div class="col-md-8 mx-auto text-center mt-5">
          <p>Your support can make a significant impact. Join us in our mission to spread happiness and hope through these initiatives. Visit our website to learn more and contribute.</p>
          <a href="your-website-url" class="btn background-clr">Get Involved</a>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}
