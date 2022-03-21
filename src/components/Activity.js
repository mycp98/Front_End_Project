const Activity = ({activity}) => {

    return (
        <>
        <div className="activityNode">
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>{activity.venue.name}</p>
            <button className="btn" id="book-activity-btn">Book Activity</button>
            
        </div>
        </>
    )

}

export default Activity;