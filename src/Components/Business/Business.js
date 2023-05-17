import React from 'react';
import './BusinessModule.css'
const Business = ({business})=>{
    return(
        <div className = "Business">
            <div className ="imageBox">
                <a href = {business.url} rel="noreferrer" target="_blank"><img src={business.imageSrc} alt={business.name+" "+business.category}/></a>
            </div>
            <h2 className='Name'>{business.name}</h2>
            <div className = "details">
                
                <div className ="address">
                    <p><a href ={business.mapAddress} rel="noreferrer" target="_blank">{business.address}</a></p>
                    <p>{business.city}</p>
                    <p>{business.state +" " + business.zipCode}</p>
                </div>
                <div className='review'>
                    <p className='category'>{business.category}</p>
                    <p className='rating'>{business.rating}</p>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    )
}   
export default Business