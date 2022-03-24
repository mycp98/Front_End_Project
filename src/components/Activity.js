import { useEffect } from "react";

const Activity = ({activity, currentUser, userActivities, setUserActivities}) => {

    // console.log(activity);
    console.log(userActivities);

    useEffect(() =>  {
    console.log(currentUser);
    }, [currentUser])

    const handleBookButtonClick = (event) => {
        event.preventDefault();
        console.log("book clicked");
        fetch(`http://localhost:8080/users/${currentUser.id}/activities/${activity.id}`, {
          method:"POST"})
        }

    const handleCancelButtonClick = (event) => {
        event.preventDefault();
        console.log("cancel clicked");
        fetch(`http://localhost:8080/users/${currentUser.id}/activities/${activity.id}`, {
          method:"DELETE"})
        }


 //where should this live? 
//  useEffect(() => {
//     const bookOrCancelActivity = ({currentUser.id, activity.id}) => {
//       fetch("http://localhost:8080/users/{user_id}/activities/{activity_id} ", {
//           method:"POST",
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           // inverse of response.json -ready to sent
//           body: JSON.stringify(newPet)
//       })
//           // update yourself the  ie webpage
//           .then(response => response.json())
//           .then(data => setPets([...pets, data]))
//   }
// },[])

// useEffect(() => {
//     for (let index = 0; index < userActivities.length; index++) {
//         if(userActivities[index].id == activity.id){
//             console.log("user is booked into this activity");
//         }
    
//     }
// }, [currentUser])

    return (
        <>
        <div className="activityNode">
            <h3>{activity.name}</h3>
            <h4>Description: </h4>
            <p>{activity.description}</p>
            {/* <h4>Venue: </h4> */}
            {/* <p>{activity.venue.name}</p> */}
            <button onClick={handleBookButtonClick} className="btn" id="book-activity-btn">Book Activity</button>
            {/* {userActivities.name == activity.name ?  
            <button onClick={handleBookButtonClick} className="btn" id="book-activity-btn">Book Activity</button>
            : 
            <p>Sign in</p> } */}
            <button onClick={handleCancelButtonClick} className="btn" id="cancel-activity-btn">Cancel Activity</button>
        </div>
        </>
    )

}

export default Activity;