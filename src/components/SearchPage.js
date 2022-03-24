import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ActivityList from './ActivityList';

const SearchPage = ({allActivities}) => {
  const [input, setInput] = useState('');
  const [activityListDefault, setActivityListDefault] = useState([]);
  const [activityList, setActivityList] = useState([]);



  useEffect (() => {
    setActivityListDefault (allActivities)
  },[activityList])

  useEffect (() => {
    setActivityList (allActivities)
    console.log("activity list initial useEffect");
  },[])

  
  useEffect (() => {
      console.log("activity list updated");
  },[activityList])



    const updateInput = async (searchInput) => {
        setInput(searchInput);
        if (searchInput != "") {
            console.log("inside first if statement")
            const filtered = activityListDefault.filter(activity => {
                return activity.name.toLowerCase().includes(searchInput.toLowerCase())
            })
            console.log("filtered array:");
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

      <h2>Search Activities</h2>
      <SearchBar 

       input={input} 
       onChange={updateInput}
      />
      <div className= "searchActivityType">
        <div className="searchGrid-row">
            <ActivityList activityList={activityList}/>
        </div>
      </div>
    </>
   );
}

export default SearchPage