const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let genres = "action";

if (params.has("genres")) {
    genres = params.get("genres");
}

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games?genres=`;
const genreUrl = gamesUrl + genres;

fetch(genreUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loadGames(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

const genreHeading = document.querySelector("h1");

const formattedGenres = genres.replace(/-/g, " ").replace(" rpg", "");

genreHeading.innerText = formattedGenres;
