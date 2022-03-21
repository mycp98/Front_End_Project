import { useState, useEffect } from 'react';
import './App.css';
import ActivitiesDisplay from './containers/ActivitiesDisplay';
import UserIdForm from './components/UserIdForm'
import Venue from './components/Venue';

function App() {
  

  const [venues, setVenues] = useState([]);

  const [guides, setGuides] = useState([]);

  const [activities, setActivities] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/venues")
      .then(response => response.json())
      .then(data => setVenues(data))
      .then(() => fetch("http://localhost:8080/guides"))
      .then(response => response.json())
      .then(data => setGuides(data))
      .then(()=> fetch("http://localhost:8080/activities"))
      .then(response => response.json())
      .then(data => setActivities(data))

      .catch(error => console.error(error))
  }, [])

  //this is returning a new array, with a key of venue_id, which we're then declaring as a venue component
  
  // setVenues = venues.map((venue) => {
  //   return <Venue venue={venue} key={venue.id}/> 
  // })

  

  // useEffect (() => {
  //   fetch("http://localhost:8080/guides")
  //     .then(response => response.json())
  //     .then(data => setGuides(data))
  //     .catch(error => console.error(error))
  // }, [])


  const [users, setUsers] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])
  

  

  // const activitiesVenuesGuides = activities.map(addExternalData)

  // function addExternalData(activity, venues) {
  //   for (activity in activities){
  //     activities.get("venue.id");
  //     activities.set(venue);


  // }

  // useEffect (() => {
  //   fetch("http://localhost:8080/activities")
  //     .then(response => response.json())
  //     // put a then here 
  //     .then(data => setActivities(data))
  //     .catch(error => console.error(error))
  // }, [])

  console.log(activities);
  

  // replace venue_id with the corresponding venue object (in the activity object)
  //for posting requests back --
  // be careful of how this would work with adding new activities etc

  const mappedActivities = activities.map (activity => {
    activity.venue = venues.find(venue => venue.id === activity.venue_id);
    activity.guide = guides.find(guide => guide.id === activity.guide_id);
    return activity
  })

  

  return (
    <>
    <UserIdForm
    users={users}
    />
    <ActivitiesDisplay 
    allActivities={mappedActivities} 
    
    // allVenues={venues}
    // allGuides={guides}
    />
    </>
  );
}

export default App;
