const Activity = ({activity}) => {

    return (
        <>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>{activity.venue.name}</p>
            
            
        </>
    )

}

export default Activity;