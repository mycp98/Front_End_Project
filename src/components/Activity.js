const Activity = ({activity}, {allVenues}) => {

    return (
        <>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>{allVenues.getVenueById[activity.venue_id]}</p>
        </>
    )

}

export default Activity;