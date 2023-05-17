import React,{useState,useEffect} from "react";
import './SearchBarModule.css';

const sortBy = {
    'Best Match':'best_match',
   'Highest Rated':'rating',
   'Most Reviewed' :'review_count'
}

const SearchBar = ({searchYelp}) =>{
    const [term,setTerm] = useState("")
    const [loc,setLoc] = useState("");
    const [sortByOpt,setSortByOpt] = useState("best_match");
    useEffect(()=>{
        searchYelp(term,loc,sortByOpt);
    },[loc, searchYelp, sortByOpt, term]);
    const getSortByClass = (option) =>{
        if(sortByOpt === option)
            return 'active';
        return "";
    }
    
    const handleSortByChange = (option)=>{
        setSortByOpt(option);
    }
    const handleLocChange = (input)=>{
        
        setLoc(input.target.value);
    }
    const handleTermChange = (input)=>{
        setTerm(input.target.value);
    }
    const handleSearch = (event) =>{
        event.preventDefault();
        searchYelp(term,loc,sortByOpt);
    }
    const pressEnterToSearch = (event)=>{
        const key = event.code;
        if(key === "Enter"){
            handleSearch(event);
        }
    }
    const renderSortBy = () => {
    return Object.keys(sortBy).map(option => {
            let value = sortBy[option];
            return(
                <li className = {getSortByClass(value)} 
                key = {value} onClick ={()=> handleSortByChange(value)}>
                    {option}
                </li>
            )
        })
    };

    return(
        <div className="SearchBar">
            <div className="sortBy">
                <ul>{renderSortBy()}</ul>
            </div>
            <form onSubmit={handleSearch}>
            <div className="condition">
                <input type="text" placeholder="Search Restaurant" onChange={handleTermChange} onKeyDown={pressEnterToSearch}/>
                <input type="text" placeholder="Where?" onChange={handleLocChange} onKeyDown={pressEnterToSearch}/>
            </div>
            <div className="submitButton">
            <button type = "submit">Search</button>
            </div>
            </form>
        </div>
    );
}

export default SearchBar;