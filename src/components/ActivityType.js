import Activity from "./Activity";

const ActivityType = ({allActivities}, {allVenues}) => {

    const activityNodes = allActivities.map((activity) => {
        return <Activity activity={activity} key={activity.id} allVenues={allVenues}/> 
    })

    const venueNodes = allVenues.map((venue) =>  {

    })

    return (
        <>
            {activityNodes}
        </>
    )

}

export default ActivityType;