const Activity = ({activity}) => {

    return (
        <>
        <div className="activityNode">
            <h3>{activity.name}</h3>
            <h4>Description: </h4>
            <p>{activity.description}</p>
            {/* <h4>Venue: </h4> */}
            {/* <p>{activity.venue.name}</p> */}
            <button className="btn" id="book-activity-btn">Book Activity</button>
            
        </div>
        </>
    )

}

export default Activity;