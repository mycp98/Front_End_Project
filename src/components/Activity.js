const Activity = ({activity}) => {

    return (
        <>
        <div className="activityNode">
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>{activity.venue.name}</p>
            
        </div>
        </>
    )

}

export default Activity;