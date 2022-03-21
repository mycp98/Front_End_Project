import { useState, useEffect } from 'react';
import './App.css';
import ActivitiesDisplay from './containers/ActivitiesDisplay';
import UserIdForm from './components/UserIdForm'
import Venue from './components/Venue';

function App() {
  

  let [venues, setVenues] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/venues")
      .then(response => response.json())
      .then(data => setVenues(data))
      .catch(error => console.error(error))
  }, [])

  //this is returning a new array, with a key of venue_id, which we're then declaring as a venue component
  
  // setVenues = venues.map((venue) => {
  //   return <Venue venue={venue} key={venue.id}/> 
  // })

  const [guides, setGuides] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/guides")
      .then(response => response.json())
      .then(data => setGuides(data))
      .catch(error => console.error(error))
  }, [])


  const [users, setUsers] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])
  

  const [activities, setActivities] = useState([]);

  // const activitiesVenuesGuides = activities.map(addExternalData)

  // function addExternalData(activity, venues) {
  //   for (activity in activities){
  //     activities.get("venue.id");
  //     activities.set(venue);


  // }

  useEffect (() => {
    fetch("http://localhost:8080/activities")
      .then(response => response.json())
      // put a then here 
      .then(data => setActivities(data))
      .catch(error => console.error(error))
  }, [])

  console.log(activities);
  

  // replace venue_id with the corresponding venue object (in the activity object)
  //for posting requests back --
  // be careful of how this would work with adding new activities etc



  return (
    <>
    <UserIdForm
    users={users}
    />
    <ActivitiesDisplay 
    allActivities={activities} 
    allVenues={venues}
    // allGuides={guides}
    />
    </>
  );
}

export default App;
