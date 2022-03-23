import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ActivityList from './ActivityList';

const SearchPage = ({allActivities}) => {
  const [input, setInput] = useState('');
  const [activityListDefault, setActivityListDefault] = useState([]);
  const [activityList, setActivityList] = useState([]);

  useEffect (() => {
    setActivityListDefault (allActivities)
    setActivityList (allActivities)
  },[])

  
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


const updateInput = async (input) => {
    const filtered = activityListDefault.filter(activity => {
     return activity.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setActivityList(filtered);
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