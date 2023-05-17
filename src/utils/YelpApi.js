const apiKey = "GaZk4y5R4lV-xx2VZmfEDly7igTlJ5uwehsGOE0QDCxfTStdEoIImohg_TEiWeFQNh40Hg9cv4RIImVhoaoGbhOivmyHVf_he476cSvxccyBQ1Tsz5p_qaeKZzJeZHYx";
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?'
const options = {
    headers : {
        Authorization: `Bearer ${apiKey}`
    }
}
const yelpApi = (term,loc,sortBy) =>{
        return fetch(`${baseURL}term=${term}&location=${loc}&sort_by=${sortBy}`,options)
        .then(response=>response.json())
        .then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business)=>{
                    return{
                    name: business.name,
                    id: business.id,
                    imageSrc: business.image_url,
                    address: business.location.address1,
                    city:business.location.city,
                    state:business.location.state,
                    zipCode: business.location.zip_code,
                    category:business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    url : business.url,
                    mapAddress: ('https://www.google.com/maps/search/' + business.alias)
                    }
              })
        }}
    )
}

export default yelpApi;