import React from 'react'
import './Faqs.css'
export default function Faqs() {
  return (
    <>
   
         <h3 className="alignCentre mt-4">Frequently Asked Questions</h3>
         <details className='mt-2'>
         <summary>How do I create accordion?</summary>
         <div>
        The tags <em>details</em> and <em>summary</em> have you covered.
         </div>
       </details>
         <details>
         <summary>How do I create accordion?</summary>
         <div>
        The tags <em>details</em> and <em>summary</em> have you covered.
         </div>
       </details>
       
    </>
  )
}
