import { useState, useEffect } from 'react';
import './App.css';
import ActivitiesDisplay from './containers/ActivitiesDisplay';
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';



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


  const [users, setUsers] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])
  

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
    if(currentUser.id != "") {
    fetch(`http://localhost:8080/users/${currentUser.id}/activities`)
      .then(response => response.json())
      .then(data => setUserActivities(data))
      .catch(error => console.error(error)) 
    }
  }, [currentUser])

    useEffect (() => {
      const mappedUserActivities = userActivities.map (activity => {
        activity.venue = venues.find(venue => venue.id === activity.venue_id);
        activity.guide = guides.find(guide => guide.id === activity.guide_id);
        return activity
      })
    }, [userActivities])

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
    <Nav/>

    
     <div className="app">
            <div className="login-form">
            <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    </div>
    
    <SearchPage  allActivities={mappedActivities}/>
   
    <ActivitiesDisplay allActivities={mappedActivities} />
  
    </>
  );
}

export default App;