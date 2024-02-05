import React from 'react'

export default function EventCard(props) {

    var recievedData = props.cardData;
    var goal_completed = (recievedData.remaining_amt / recievedData.required_amt)*100
  return (
   <>
          <h3 ><strong>{recievedData.name_}</strong></h3>
                          <br></br>
                          <div className="row">
                          <div className='fnt-description col-lg-5'>Amount Required for drive - {recievedData.required_amt} INR</div>
                          <div className='fnt-description col-lg-5'>Remaining amount for drive - {recievedData.remaining_amt} INR</div>
                          <div className='fnt-description col-lg-12'>Goal Completed -  <strong>{goal_completed}%</strong></div>
                         
                          </div>
   </>
  )
}
