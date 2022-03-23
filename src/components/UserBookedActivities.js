import Activity from "./Activity";

const UserBookedActivities = ({userActivities}) => {

    const userActivityNodes = userActivities.map((activity) => {
        return <Activity activity={activity} key={activity.id}/> 
    })


    return (
        <>
        <div className="activityType">
            <div className="grid-row">
                {userActivityNodes}
            </div>
        </div>
        </>
    )

}

export default UserBookedActivities;