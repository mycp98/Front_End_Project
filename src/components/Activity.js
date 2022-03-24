import { useEffect } from "react";

const Activity = ({activity, currentUser}) => {

    console.log(activity);

    useEffect(() =>  {
    console.log(currentUser);
    }, [currentUser])

    const handleBookButtonClick = (event) => {
        event.preventDefault();
        console.log("it clicked");
        fetch(`http://localhost:8080/users/${currentUser.id}/activities/${activity.id}`, {
          method:"POST"})
        //   headers: {
        //       'Content-Type': 'application/json'
        //   },
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



    return (
        <>
        <div className="activityNode">
            <h3>{activity.name}</h3>
            <h4>Description: </h4>
            <p>{activity.description}</p>
            {/* <h4>Venue: </h4> */}
            {/* <p>{activity.venue.name}</p> */}
            <button onClick={handleBookButtonClick} className="btn" id="book-activity-btn">Book Activity</button>
            {/* {userActivities.length > 0 ?  
            <div>
                <h2 className="activity-type-title">Your Booked Activities</h2>
            <UserBookedActivities userActivities={userActivities} currentUser={currentUser}/> 
            </div> : 
            <p>Sign in</p> } */}
        </div>
        </>
    )

}

export default Activity;