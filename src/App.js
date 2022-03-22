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

    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

    // to do: ask why it only worked in this way (i.e: why we had to set properties here and not in 'errorMessages')
  const [currentUser, setCurrentUser] = useState({id: "", name: "", phoneNumber: "", email: ""});
  
  const [userActivities, setUserActivities] = useState([]);

 
    useEffect (() => {
      fetch(`http://localhost:8080/users/${currentUser.id}/activities`)
        .then(response => response.json())
        // .then(response => JSON.stringify(response))
        .then(data => setUserActivities(data))
        .catch(error => console.error(error))
    }, [currentUser])

  const errors = {
    emailAd: "Invalid Email",
    phoneNo: "Invalid Phone Number"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { emailAd, phoneNo } = document.forms[0];

    // Find user login info
    const userData = users.find((user) => user.email === emailAd.value);
    
    // Compare user info
    if (userData) {
      if (userData.phoneNumber !== phoneNo.value) {
        // Invalid password
        setErrorMessages({ 
            name: "phoneNo", 
            message: errors.phoneNo });
      }
      
      else {
        setIsSubmitted(true);
        console.log(currentUser);
        console.log(userData);
        const newUser = {id: userData.id, name: userData.name, phoneNumber: userData.phoneNumber, email: userData.email}
        setCurrentUser(newUser);
        
    
      }
      
    } 

    else {
      // email not found
      setErrorMessages({ 
          name: "emailAd", 
          message: errors.emailAd });
    }
  };



  // Generate JSX code for error message
  // !
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="emailAd" required />
          {renderErrorMessage("emailAd")}
        </div>
        <div className="input-container">
          <label>Phone Number </label>
          <input type="password" name="phoneNo" required />
          {renderErrorMessage("phoneNo")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    );
  

  return (
    <>
     <div className="app">
            <div className="login-form">
            <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    </div>
    <ActivitiesDisplay 
    allActivities={mappedActivities} 
    
    // allVenues={venues}
    // allGuides={guides}
    />
  
    </>
  );
}

export default App;