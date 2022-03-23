const ActivityList = ({activityList}) => {
    
    
        return (
        <>
        {activityList.map((activity) => {
            if (activity) {
                return (
                <div className="searchActivityNode" key={activity.id}>
                    <h3>{activity.name}</h3>
                    <h4>Description:</h4>
                    <p>{activity.description}</p>
                    <h4>Venue: </h4>
            <p>{activity.venue.name}</p>
            <button className="btn" id="book-activity-btn">Book Activity</button>
            </div>
                )
            }
            return (
                <div>
                    <h2>No data</h2>
                </div>
            )
        }) }
        </>
        )


    
        

  }
  
  export default ActivityList;