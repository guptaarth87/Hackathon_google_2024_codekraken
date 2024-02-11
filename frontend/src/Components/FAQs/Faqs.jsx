import React from "react";
import "./Faqs.css";
export default function Faqs() {
  return (
    <>
      <h3 className="alignCentre mt-5 display-6 fnt-heading " id="faq">
        Frequently Asked Questions
      </h3>
      <details className="mt-2  border-bottom-0 fnt-description">
        <summary >How can I get involved or volunteer with Towards Happiness?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
      <details className="mt-2  border-bottom-0 fnt-description">
        <summary>How can I make a donation to support Towards Happiness's activities?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
      <details className="mt-2  border-bottom-0 fnt-description">
        <summary>Is Towards Happiness involved in international or local projects?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
      <details className="mt-2  border-bottom-0 fnt-description">
        <summary>How can I report an issue or seek assistance from Towards Happiness for a particular cause?</summary>
        <div>
          The tags <em>details</em> and <em>summary</em> have you covered.
        </div>
      </details>
    </>
  );
}
