import ActivityType from "../components/ActivityType";
import UserBookedActivities from "../components/UserBookedActivities";

//props always sent as one big object - insert as much as you need into the object
const ActivitiesDisplay = ({allActivities, userActivities, currentUser, setUserActivities}) => {

// console.log(allActivities);

// console.log(userActivities);

console.log(currentUser);

    return (
        <>

            {userActivities.length > 0 ?  
            <div>
                <h2 className="activity-type-title">Your Booked Activities</h2>
            <UserBookedActivities userActivities={userActivities} currentUser={currentUser}/> 
            </div> : 
            <p>Sign in</p> }
           

            <h2 className="activity-type-title">All Activities</h2>
            <ActivityType allActivities={allActivities} currentUser={currentUser} userActivities={userActivities} setUserActivities={setUserActivities}/>
        </>
    )

}

export default ActivitiesDisplay;