import Activity from "./Activity";

const ActivityType = ({allActivities}) => {

    const activityNodes = allActivities.map((activity, index) => {
        return <Activity activity={activity} key={activity.id}/> 
    })

    return (
        <>
            {activityNodes}
        </>
    )

}

export default ActivityType;