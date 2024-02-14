import React,{useState, useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EventCard from '../Components/AllEvents/EventCard';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import API_URL from '../_helper';

export default function Events() {

  const [Events , setEvents] = useState(null)
  const [UpcomingEvents , setUpcomingEvents] = useState(null)
  const [CompletedEvents , setCompletedEvents] = useState(null)

  
  useEffect(() => {
    const loadData = async () => {
      try {
        const eventsResponse = await axios.get(`${API_URL}/events`);
        setEvents(eventsResponse.data.events);
        

        const upcomingEventsResponse = await axios.get(`${API_URL}/upcoming_events`);
        setUpcomingEvents(upcomingEventsResponse.data.upcoming_events);
        console.log(upcomingEventsResponse.data.upcoming_events);

        const completedEventsResponse = await axios.get(`${API_URL}/completed_events`);
        setCompletedEvents(completedEventsResponse.data.completed_events);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    loadData();
  }, []); 
 

  // console.log(CompletedEvents)
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

    const CompletedEventss=[
            {
                name_:"Food Drive",
                recieved_amt: 10000,
                venue:"Gwaltoli, Indore",
                date_:"18-02-2024",
                volunteers_participated:10
            },
            {
                name_:"Plantation Drive",
                recieved_amt: 6000,
                venue:"patalpani, Indore",
                date_:"25-02-2024",
                volunteers_participated:10
            },
            {
                name_:"Educational Workshop",
                recieved_amt: 3000,
                venue:"Jeevan jyoti, Indore",
                date_:"25-02-2024",
                volunteers_participated:10
            }
            ]
    
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="mt-4">
        <Tabs>
            <div className="container">
               <TabList>
                 <Tab ><h3>Events</h3></Tab>
                 <Tab><h3>UpComming Events</h3></Tab>
                 <Tab><h3>Previous Events</h3></Tab>
               </TabList>
              
               <TabPanel >
                
                 <div className='border rounded col-12 p-5 food-card-background mt-3'>
                        <EventCard cardData={FoodDriveData}/>
                        <br></br>
                        
                          <HashLink to="/payment" className='btn col-lg-2 col-md-3 col-sm-4 btn-food'>Donate 🤝</HashLink >
                  </div>

                 <div className='border rounded col-12 p-4 plantation-card-background  mt-3'>
                 <EventCard cardData={PlantationDriveData}/>
                 <br></br>
                         
                          <HashLink to="/payment" className='btn col-lg-2 col-md-3 col-sm-4 btn-plantation'>Donate 🤝</HashLink >
                     
                 </div>

                 <div className='border rounded col-12 p-4 education-card-background  mt-3'>
                 <EventCard cardData={EducationalWorkshopData}/>
                 <br></br>
                          
                          <HashLink to="/payment" className='btn col-lg-2 col-md-3 col-sm-4 btn-education'>Donate 🤝</HashLink > 
                 </div>
               </TabPanel>

               {/* upcomming events */}
               <TabPanel>
               {UpcomingEvents?.map((event, index) => {
        // Conditionally render JSX based on event name
        let jsxElement;
        switch (event.name_) {
          case 'Food Drive':
            jsxElement =  <div className='border rounded col-12 p-4 food-card-background  mt-3'>
                <h3><strong>{event.name_}</strong></h3>
                <br></br>
                <div className='fnt-description col-lg-5'>Date for drive - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteer required for drive - {event.remaining_volunteers} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
                <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
                <br></br>
                          <br></br>
                          <HashLink  className='btn col-lg-3 col-md-3 col-sm-8 btn-food' to='/registervolunteer'>Participate as Volunteer 🤝</HashLink>
              
            </div>
            break;
          case 'Plantation Drive':
            jsxElement = <div className='border rounded col-12 p-4 plantation-card-background  mt-3'>
            <h3><strong>{event.name_}</strong></h3>
            <br></br>
            <div className='fnt-description col-lg-5'>Date for drive - {event.date_} </div>
            <div className='fnt-description col-lg-5'>Volunteer required for drive - {event.remaining_volunteers} </div>
            <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
            
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
            <br></br>
                          <br></br>
                          <HashLink  className='btn col-lg-3 col-md-3 col-sm-8 btn-plantation' to='/registervolunteer'>Participate as Volunteer 🤝</HashLink>
              
        </div>
            break;
          case 'Educational Workshop':
            jsxElement = <div className='border rounded col-12 p-4 education-card-background  mt-3'>
            <h3><strong>{event.name_}</strong></h3>
            <br></br>
            <div className='fnt-description col-lg-5'>Date for drive - {event.date_} </div>
            <div className='fnt-description col-lg-5'>Volunteer required for drive - {event.remaining_volunteers} </div>
            <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
            
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
            <br></br>
                          <br></br>
                          <HashLink  className='btn col-lg-3 col-md-3 col-sm-8 btn-education' to='/registervolunteer'>Participate as Volunteer 🤝</HashLink>
              
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
               {CompletedEvents?.map((event, index) => {
        // Conditionally render JSX based on event name
        let jsxElement;
        switch (event.name_) {
          case 'Food Drive':
            jsxElement =  <div className='border rounded col-12 p-4 food-card-background  mt-3'>
                <h3><strong>{event.name_}</strong></h3>
                <br></br>
                <div className='fnt-description col-lg-5'>Date  - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteers participated - {event.volunteers_participated} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
                <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
                <br></br>
                        
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-food'>View Details</button>
              
            </div>
            break;
          case 'Plantation Drive':
            jsxElement = <div className='border rounded col-12 p-4 plantation-card-background  mt-3'>
            <h3><strong>{event.name_}</strong></h3>
            <br></br>
            <div className='fnt-description col-lg-5'>Date  - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteers participated - {event.volunteers_participated} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
            <br></br>
                         
                          <button className='btn col-lg-3 col-md-3 col-sm-4 btn-plantation'>View Details</button>
                     
        </div>
            break;
          case 'Educational Workshop':
            jsxElement = <div className='border rounded col-12 p-4 education-card-background  mt-3'>
            <h3><strong>{event.name_}</strong></h3>
            <br></br>
            <div className='fnt-description col-lg-5'>Date  - {event.date_} </div>
                <div className='fnt-description col-lg-5'>Volunteers participated - {event.volunteers_participated} </div>
                <div className='fnt-description col-lg-5'>Venue- {event.venue} </div>
                
            <div className='fnt-description col-lg-5'>Total amount recieved for drive - {event.recieved_amt} INR</div>
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
