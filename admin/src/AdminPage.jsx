import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const API_URL = 'your_api_url_here'; // Replace with your actual API URL

const AdminPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data, e) => {
    try {
      await axios.post(API_URL, data);
      reset(); // Clear form after successful submission
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Events</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="eventName">Name</label>
              <input type="text" className="form-control" id="eventName" placeholder="Enter event name" {...register('name_')} />
            </div>
            <div className="form-group">
              <label htmlFor="requiredAmount">Required Amount</label>
              <input type="number" className="form-control" id="requiredAmount" placeholder="Enter required amount" {...register('required_amt')} />
            </div>
            <div className="form-group">
              <label htmlFor="remainingAmount">Remaining Amount</label>
              <input type="number" className="form-control" id="remainingAmount" placeholder="Enter remaining amount" {...register('remaining_amt')} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Upcoming Events</h2>
          {/* Similar form structure for Upcoming Events */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="upcomingEventName">Name</label>
              <input type="text" className="form-control" id="upcomingEventName" placeholder="Enter event name" {...register('name_')} />
            </div>
            <div className="form-group">
              <label htmlFor="receivedAmount">Received Amount</label>
              <input type="number" className="form-control" id="receivedAmount" placeholder="Enter received amount" {...register('recieved_amt')} />
            </div>
            <div className="form-group">
              <label htmlFor="venue">Venue</label>
              <input type="text" className="form-control" id="venue" placeholder="Enter venue" {...register('venue')} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="text" className="form-control" id="date" placeholder="Enter date" {...register('date_')} />
            </div>
            <div className="form-group">
              <label htmlFor="remainingVolunteers">Remaining Volunteers</label>
              <input type="number" className="form-control" id="remainingVolunteers" placeholder="Enter remaining volunteers" {...register('remaining_volunteers')} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Completed Events</h2>
          {/* Similar form structure for Completed Events */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="completedEventName">Name</label>
              <input type="text" className="form-control" id="completedEventName" placeholder="Enter event name" {...register('name_')} />
            </div>
            <div className="form-group">
              <label htmlFor="receivedAmount">Received Amount</label>
              <input type="number" className="form-control" id="receivedAmount" placeholder="Enter received amount" {...register('recieved_amt')} />
            </div>
            <div className="form-group">
              <label htmlFor="venue">Venue</label>
              <input type="text" className="form-control" id="venue" placeholder="Enter venue" {...register('venue')} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="text" className="form-control" id="date" placeholder="Enter date" {...register('date_')} />
            </div>
            <div className="form-group">
              <label htmlFor="volunteersParticipated">Volunteers Participated</label>
              <input type="number" className="form-control" id="volunteersParticipated" placeholder="Enter volunteers participated" {...register('volunteers_participated')} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
