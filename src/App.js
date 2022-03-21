import { useState, useEffect } from 'react';
import './App.css';
import ActivitiesDisplay from './containers/ActivitiesDisplay';
import UserIdForm from './components/UserIdForm'

function App() {
  

  const [users, setUsers] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])
    
  const [activities, setActivities] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/activities")
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error(error))
  }, [])

  const [venues, setVenues] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/venues")
      .then(response => response.json())
      .then(data => setVenues(data))
      .catch(error => console.error(error))
  }, [])

  const [guides, setGuides] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/guides")
      .then(response => response.json())
      .then(data => setGuides(data))
      .catch(error => console.error(error))
  }, [])
  

  // replace venue_id with the corresponding venue object 
  // be careful of how this would work with adding new activities etc



  return (
    <>
    <UserIdForm
    users={users}
    />
    <ActivitiesDisplay 
    allActivities={activities} 
    allVenues={venues}
    allGuides={guides}
    />
    </>
  );
}

export default App;
