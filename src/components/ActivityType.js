import Activity from "./Activity";

const ActivityType = ({allActivities, currentUser, userActivities, setUserActivities}) => {

    const activityNodes = allActivities.map((activity) => {
        console.log(activity);
        return <Activity activity={activity} currentUser={currentUser} key={activity.id} userActivities={userActivities} setUserActivities={setUserActivities}/> 
    })

    // const venueNodes = allVenues.map((venue) => {
    //     return <Venue venue={venue} key={venue.id}/> 
    // })

    return (
        <>
        <div className="activityType">
            <div className="grid-row">
                {activityNodes}
            </div>
        </div>
        </>
    )

}

export default ActivityType;