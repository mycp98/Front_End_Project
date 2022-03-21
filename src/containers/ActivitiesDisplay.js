import ActivityType from "../components/ActivityType";

const ActivitiesDisplay = ({allActivities}) => {

    return (
        <>
            <h2 className="activity-type-title">All Activities</h2>
            <ActivityType allActivities={allActivities}/>
        </>
    )

}

export default ActivitiesDisplay;