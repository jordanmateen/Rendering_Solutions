
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards

    restaurantsHMTL = restaurants.map( (restaurant)=>{
        return (
            `
            <div  class = "d-flex flex-column ml-3 p-3" style = "background-color : #DCDCDC; border-radius: 10%; width : 180px; height : 120px;">
                <span style = "font-size : 23px;"><b>${restaurant.name}</b></span>
                <span style = "font-size : 13px; color : #696969">type : ${restaurant.type}</span>
                <span>Rating:${restaurant.priceRating}</span>
            </div>
            `
        )
    })
    return `
        <div class=" d-flex flex-row mt-5">
            ${restaurantsHMTL.join('')}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}