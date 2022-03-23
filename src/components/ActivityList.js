const ActivityList = ({activityList}) => {
    return (
      <>
      {activityList.map((data,index) => {
          if (data) {
            return (
              <div key={data.name}>
                <h1>{data.name}</h1>
          </div>
             )
           }
           return (
               <div>
                   <h2>Nothing here</h2>
               </div>
           )
      }) }
      </>
    );
  }
  
  export default ActivityList;