import Activity from "./Activity";

const ActivityType = ({allActivities}) => {

    const activityNodes = allActivities.map((activity) => {
        return <Activity activity={activity} key={activity.id}/> 
    })

    // const venueNodes = allVenues.map((venue) => {
    //     return <Venue venue={venue} key={venue.id}/> 
    // })

    return (
        <>
        <div className="activityType">
            {activityNodes}
        </div>
        </>
    )

}

export default ActivityType;