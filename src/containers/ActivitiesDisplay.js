import ActivityType from "../components/ActivityType";
import UserBookedActivities from "../components/UserBookedActivities";

const ActivitiesDisplay = ({allActivities}, {userActivities}) => {

console.log(allActivities);

console.log(userActivities);

    return (
        <>
             <h2 className="activity-type-title">Your Booked Activities</h2>
            <UserBookedActivities userActivities={userActivities}/>

            <h2 className="activity-type-title">All Activities</h2>
            <ActivityType allActivities={allActivities}/>
        </>
    )

}

export default ActivitiesDisplay;