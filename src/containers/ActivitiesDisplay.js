import ActivityType from "../components/ActivityType";

const ActivitiesDisplay = ({allActivities}, {allVenues}) => {

    return (
        <>
        <ActivityType allActivities={allActivities} allVenues={allVenues}/>
        </>
    )

}

export default ActivitiesDisplay;