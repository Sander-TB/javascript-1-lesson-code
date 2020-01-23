const CONTAINER = document.querySelector(".container");

let newHTML = "";
let ratingValue = "Not Rated";

for (let i = 0; i < actionGames.length; i++) {
    //var NAME = "<h4>" + actionGames[i].name + "</h4>"; //ES5
    //const NAME = `<h4> ${actionGames[i].name} </h4>`; //ES6 
    
    if (actionGames[i].rating) {
        ratingValue = actionGames[i].rating;
    } else {
        ratingValue = "Not Rated";
    }

   //actionGames[i].rating ? ratingValue = actionGames[i].rating : ratingValue = "Not Rated";;

    const DETAILS = `
        
        <div class ="card">
            <div class="image" style="background-image: url(${actionGames[i].background_image});"></div>
            <div class="details">
                <h4> ${actionGames[i].name} </h4>
                <div class="rating">${ratingValue}</div>
            </div>
        </div>
        `;

    newHTML += DETAILS;
}

CONTAINER.innerHTML = newHTML;

console.log(newHTML);