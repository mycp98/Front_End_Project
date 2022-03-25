const SearchBar = ({input:keyword, onChange:setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (

      <div>
        <input 
       style={BarStyling}

       key="random1"
       value={keyword}
       placeholder={"search activity"}
       onChange={(e) => setKeyword(e.target.value)}
        />
        
        <h2><br></br>Search Results</h2>
      </div>
    );
  }
  
  export default SearchBar