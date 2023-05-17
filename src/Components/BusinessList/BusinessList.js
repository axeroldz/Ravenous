import React from 'react';
import Business from '../Business/Business';
import './BusinessListModule.css';

const BusinessList = (props)=>{
    const businesses = props.businessList;
    if(businesses)
    return(
        <div className='BusinessList'>
            {businesses.map((business) => {
       return <Business business={business} key={business.name} />;
      })}
        
        </div>
    )
    return;
} 
export default BusinessList;