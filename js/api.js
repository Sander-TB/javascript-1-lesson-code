const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games`;

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // call the loadGames function and pass in the json object
        loadGames(json);
    })
    .catch(function(error) {
        console.dir(error);
    });