import ActivityType from "../components/ActivityType";
import UserBookedActivities from "../components/UserBookedActivities";

//props always sent as one big object - insert as much as you need into the object
const ActivitiesDisplay = ({allActivities, userActivities}) => {

console.log(allActivities);

console.log(userActivities);

    return (
        <>

            {userActivities.length > 0 ?  
            <div>
                <h2 className="activity-type-title">Your Booked Activities</h2>
            <UserBookedActivities userActivities={userActivities}/> 
            </div> : 
            <p>Please Sign In At the Top</p> }
           

            <h2 className="activity-type-title">All Activities</h2>
            <ActivityType allActivities={allActivities}/>
        </>
    )

}

export default ActivitiesDisplay;