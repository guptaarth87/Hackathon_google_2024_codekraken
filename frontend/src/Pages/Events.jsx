import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EventCard from '../Components/AllEvents/EventCard';

export default function Events() {

    const FoodDriveData = {
        name_:"Food Drive",
        required_amt: 10000,
        remaining_amt:6000,

    }

    const PlantationDriveData = {
        name_:"Plantation Drive",
        required_amt: 6000,
        remaining_amt:2000,

    }

    const EducationalWorkshopData = {
        name_:"Educational Workshop",
        required_amt: 6000,
        remaining_amt:2000,

    }

   const upCommingEvents =[
    {
        name_:"Food Drive",
        recieved_amt: 10000,
        venue:"Gwaltoli, Indore",
        date_:"18-02-2024",
        remaining_volunteers:4
    },
    {
        name_:"Plantation Drive",
        recieved_amt: 6000,
        venue:"patalpani, Indore",
        date_:"25-02-2024",
        remaining_volunteers:4
    },
    {
        name_:"Educational Workshop",
        recieved_amt: 3000,
        venue:"Jeevan jyoti, Indore",
        date_:"25-02-2024",
        remaining_volunteers:4
    }
    ]

    const CompletedEvents=[
            {
                name_:"Food Drive",
                recieved_amt: 10000,
                venue:"Gwaltoli, Indore",
                date_:"18-02-2024",
                volunteer_participated:10
            },
            {
                name_:"Plantation Drive",
                recieved_amt: 6000,
                venue:"patalpani, Indore",
                date_:"25-02-2024",
                volunteer_participated:10
            },
            {
                name_:"Educational Workshop",
                recieved_amt: 3000,
                venue:"Jeevan jyoti, Indore",
                date_:"25-02-2024",
                volunteer_participated:10
            }
            ]
    
  return (
    <>
    <div className="mt-4">
        <Tabs>
            <div className="container">
               <TabList>
                 <Tab ><h1>Events</h1></Tab>
                 <Tab><h1>UpComming Events</h1></Tab>
                 <Tab><h1>Previous Events</h1></Tab>
               </TabList>
              
               <TabPanel >
                
                 <div className='border rounded col-12 p-5 food-card-background mt-3'>
                        <EventCard cardData={FoodDriveData}/>
                        <br></br>
                          <br></br>
                          <br></br>
                          <button className='btn col-lg-2 col-md-3 col-sm-4 btn-food'>Donate 🤝</button>
                  </div>

                 <div className='border rounded col-12 p-4 plantation-card-background  mt-3'>
                 <EventCard cardData={PlantationDriveData}/>
                 <br></br>
                          <br></br>
                          <br></br>
                          <button className='btn col-lg-2 col-md-3 col-sm-4 btn-plantation'>Donate 🤝</button>
                     
                 </div>

                 <div className='border rounded col-12 p-4 education-card-background  mt-3'>
                 <EventCard cardData={EducationalWorkshopData}/>
                 <br></br>
                          <br></br>
                          <br></br>
                          <button className='btn col-lg-2 col-md-3 col-sm-4 btn-education'>Donate 🤝</button> 
                 </div>
               </TabPanel>

               {/* upcomming events */}
               <TabPanel>
               {upCommingEvents.map((event, index) => {
        // Conditionally render JSX based on event name
        let jsxElement;
        switch (event.name_) {
          case 'Food Drive':
            jsxElement =  <div className='border rounded col-12 p-4 food-card-background  mt-3'>
                <h1><strong>{event.name_}</strong></h1>
                <br></br>
                <div className='fnt-description col-lg-5'>Date for drive - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteer required for drive - {event.remaining_volunteers} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
                <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
                <br></br>
                          <br></br>
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-food'>Participate as Volunteer 🤝</button>
              
            </div>
            break;
          case 'Plantation Drive':
            jsxElement = <div className='border rounded col-12 p-4 plantation-card-background  mt-3'>
            <h1><strong>{event.name_}</strong></h1>
            <br></br>
            <div className='fnt-description col-lg-5'>Date for drive - {event.date_} </div>
            <div className='fnt-description col-lg-5'>Volunteer required for drive - {event.remaining_volunteers} </div>
            <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
            
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
            <br></br>
                          <br></br>
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-plantation'>Participate as Volunteer 🤝</button>
                     
        </div>
            break;
          case 'Educational Workshop':
            jsxElement = <div className='border rounded col-12 p-4 education-card-background  mt-3'>
            <h1><strong>{event.name_}</strong></h1>
            <br></br>
            <div className='fnt-description col-lg-5'>Date for drive - {event.date_} </div>
            <div className='fnt-description col-lg-5'>Volunteer required for drive - {event.remaining_volunteers} </div>
            <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
            
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
            <br></br>
                          <br></br>
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-education'>Participate as Volunteer 🤝</button>
              
        </div>
            break;
          default:
            jsxElement = <h1>This is Default</h1>;
        }

        return (
          <div key={index}>
            {jsxElement}
          </div>
        );
      })}
               </TabPanel>

               <TabPanel>
               {CompletedEvents.map((event, index) => {
        // Conditionally render JSX based on event name
        let jsxElement;
        switch (event.name_) {
          case 'Food Drive':
            jsxElement =  <div className='border rounded col-12 p-4 food-card-background  mt-3'>
                <h1><strong>{event.name_}</strong></h1>
                <br></br>
                <div className='fnt-description col-lg-5'>Date  - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteers participated - {event.volunteer_participated} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
                <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
                <br></br>
                          <br></br>
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-food'>View Details</button>
              
            </div>
            break;
          case 'Plantation Drive':
            jsxElement = <div className='border rounded col-12 p-4 plantation-card-background  mt-3'>
            <h1><strong>{event.name_}</strong></h1>
            <br></br>
            <div className='fnt-description col-lg-5'>Date  - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteers participated - {event.volunteer_participated} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
            <br></br>
                          <br></br>
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-plantation'>View Details</button>
                     
        </div>
            break;
          case 'Educational Workshop':
            jsxElement = <div className='border rounded col-12 p-4 education-card-background  mt-3'>
            <h1><strong>{event.name_}</strong></h1>
            <br></br>
            <div className='fnt-description col-lg-5'>Date  - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteers participated - {event.volunteer_participated} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
            <br></br>
                          <br></br>
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-education'>View Details</button>
              
        </div>
            break;
          default:
            jsxElement = <h1>This is Default</h1>;
        }

        return (
          <div key={index}>
            {jsxElement}
          </div>
        );
      })}
               </TabPanel>
               </div>
        </Tabs> 
        </div>
    </>
  )
}
