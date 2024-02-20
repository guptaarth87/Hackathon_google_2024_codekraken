import React,{useState, useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EventCard from '../Components/AllEvents/EventCard';
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import API_URL from '../_helper';
import { useNavigate } from 'react-router-dom';

export default function Events() {

  const [Events , setEvents] = useState(null)
  const [UpcomingEvents , setUpcomingEvents] = useState(null)
  const [CompletedEvents , setCompletedEvents] = useState(null)
 const navigate = useNavigate();
 
  useEffect(() => {
    const loadData = async () => {
      try {
        const eventsResponse = await axios.get(`${API_URL}/events`);
        setEvents(eventsResponse.data.events);
        console.log(Events);
       

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
  let FoodDriveData = {}
  let PlantationDriveData={}
  let EducationalWorkshopData = {}
   const getObjectByName = (arr, name) => arr.find(obj => obj.name_ === name);
  if (Events !== null){
     FoodDriveData = getObjectByName(Events ,"Food Drive" );
     PlantationDriveData= getObjectByName(Events ,"Plantation Drive" );
     EducationalWorkshopData=getObjectByName(Events ,"Educational Workshop" );
  }
     // console.log(CompletedEvents)
    // const FoodDriveData = {
    //     name_:"Food Drive",
    //     required_amt: 10000,
    //     remaining_amt:6000,

    // }

   


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
                
                {FoodDriveData? <div className='border rounded col-12 p-5 food-card-background mt-3'>
                        <EventCard cardData={FoodDriveData}/>
                        <br></br>
                        
                          <button onClick={()=>{navigate('/payment?paidFor=Food Drive')}} className='btn col-lg-2 col-md-3 col-sm-4 btn-food'>Donate 🤝</button >
                  </div>:<></>
                   }

                   {PlantationDriveData?
                    <div className='border rounded col-12 p-4 plantation-card-background  mt-3'>
                    <EventCard cardData={PlantationDriveData}/>
                    <br></br>
                            
                             <button  onClick={()=>{navigate('/payment?paidFor=Plantation Drive')}} className='btn col-lg-2 col-md-3 col-sm-4 btn-plantation'>Donate 🤝</button >
                        
                    </div>:
                    <></>
   

                   }
                {
                  EducationalWorkshopData?
<div className='border rounded col-12 p-4 education-card-background  mt-3'>
                 <EventCard cardData={EducationalWorkshopData}/>
                 <br></br>
                          
                          <button  onClick={()=>{navigate('/payment?paidFor=Educational Workshop')}} className='btn col-lg-2 col-md-3 col-sm-4 btn-education'>Donate 🤝</button > 
                 </div>:
                 <></>
                }
                 
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
                        
                          <HashLink to='/detailspage' className='btn col-lg-3 col-md-3 col-sm-4 btn-food'>View Details</HashLink>
              
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
                         
                          <HashLink to='/detailspage' className='btn col-lg-3 col-md-3 col-sm-4 btn-plantation'>View Details</HashLink>
                     
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
                          
                          <HashLink to='/detailspage' className='btn col-lg-3 col-md-3 col-sm-4 btn-education'>View Details</HashLink>
              
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
