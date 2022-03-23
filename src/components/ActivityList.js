const ActivityList = ({activityList}) => {
    
    
        return (
        <>
        {activityList.map((activity) => {
            if (activity) {
                return (
                <div key={activity.id}>
                    <h1>{activity.name}</h1>
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