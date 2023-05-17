import React,{useState} from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from '../SearchBar/SearchBar';
import './AppModule.css';    
import yelpApi from '../../utils/YelpApi'

const App = () =>{
    const[business,setBusiness] = useState([]);
    const searchYelp = async(term,loc,sortBy)=>{
      await yelpApi(term,loc,sortBy).then(businesses => setBusiness(businesses));
    }
    return(
        <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp = {searchYelp}/>
        <BusinessList businessList = {business}/>
        </div>
    )
}
export default App;