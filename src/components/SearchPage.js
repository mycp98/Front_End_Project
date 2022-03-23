import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ActivityList from './ActivityList';

const SearchPage = ({allActivities}) => {
  const [input, setInput] = useState('');
  const [activityListDefault, setActivityListDefault] = useState([]);
  const [activityList, setActivityList] = useState([]);

  useEffect (() => {
    setActivityList (allActivities)
  },[])

  useEffect (() => {
    setActivityListDefault (allActivities)
    // setActivityList (allActivities)
    console.log(allActivities);
  },[activityList])

  

  
  
  useEffect (() => {
      //!
      console.log(activityList);
  },[activityList])

//   const fetchData = async () => {
//     return await fetch("http://localhost:8080/activities")
//       .then(response => response.json())
//       .then(data => {
//         setActivityList(data) 
//         setActivityListDefault(data)
//        })}


    const updateInput = async (searchInput) => {

        setInput(searchInput);
        console.log(searchInput);
        console.log(activityListDefault);
        if (searchInput != "") {
            const filtered = activityListDefault.filter(activity => {
                return activity.name.toLowerCase().includes(searchInput.toLowerCase())
            })
            console.log(filtered);
            setActivityList(filtered);
        }
        else if (searchInput == ""){
            setActivityList([])
        }
    
 }


//   useEffect( () => {fetchData()},[]);

  return (
    <>
      <h1>Activity list</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <div className= "hide">
      <ActivityList activityList={activityList}/>
    
      </div>
    </>
   );
}

export default SearchPage