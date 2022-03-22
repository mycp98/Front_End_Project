import User from "./User";
import { useState } from "react";

const UserIdForm = ({users}) => {

    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

    // to do: ask why it only worked in this way (i.e: why we had to set properties here and not in 'errorMessages')
  const [currentUser, setCurrentUser] = useState({id: "", name: "", phoneNumber: "", email: ""});

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
        setCurrentUser(
            currentUser.id = userData.id,
            currentUser.name = userData.name,
            currentUser.phoneNumber = userData.phoneNumber,
            currentUser.email = userData.email
         );
         
    
    
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
        </>
    )

    }

export default UserIdForm;