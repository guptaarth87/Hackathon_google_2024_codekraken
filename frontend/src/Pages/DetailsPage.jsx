import React from 'react'
import DetailsCards from '../Components/DetailsCard/DetailsCards';

export default function DetailsPage() {
    const FoodDriveDetails = {
        name: "Food Drive",
        details: {
          "Total amount collected": "10000 INR",
          "Spend on logistics": "1000 INR",
          "Spend on Food": "8000 INR",
          "Volunteers refreshment": "1000 INR",
          "Total volunteers participated": "10"
        },
        story: "The Food Drive workshop was a tremendous success. With the help of dedicated volunteers, we were able to collect a total amount of 10000 INR. Despite facing challenges along the way, such as logistical issues and unexpected hurdles, the spirit of teamwork prevailed, and we overcame them together. Each volunteer contributed wholeheartedly, ensuring that the event ran smoothly and efficiently. Together, we made a meaningful difference in our community, demonstrating the power of unity and compassion."
      };
      
      const PlantationDriveDetails = {
        name: "Plantation Drive",
        details: {
          "Total saplings planted": "500",
          "Spend on saplings": "15000 INR",
          "Spend on tools and equipment": "5000 INR",
          "Volunteers refreshment": "2000 INR",
          "Total volunteers participated": "20"
        },
        story: "The Plantation Drive was a huge success, with a total of 500 saplings planted in our community. Despite the scorching sun and challenging terrain, our team of dedicated volunteers persevered, ensuring that each sapling was planted with care and precision. With a total expenditure of 20000 INR, including the cost of saplings and necessary tools, we managed to create a greener and healthier environment for future generations. The sense of accomplishment and unity among volunteers was palpable, showcasing the positive impact that collective action can have on our planet."
      };
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <DetailsCards {...FoodDriveDetails} />
    <DetailsCards {...PlantationDriveDetails} />
    </>
  )
}
