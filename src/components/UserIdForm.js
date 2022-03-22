import User from "./User";
const UserIdForm = ({users}) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    const database = users.map((user) => {
        
        return <User user={user} key={user.id} />
    })

    // for (const user of database) {
    //     user.password = "password"
    // }
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };

      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
      
        var { uname, pass } = document.forms[0];
      
        // Find user login info
        const userData = database.find((user) => user.email === uname.value);
      
        // Compare user info
        if (userData) {
          if (userData.password !== "password") {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };

    return (
        <>
        
        
        
        </>
    )

}

export default UserIdForm;