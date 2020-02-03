const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games/`;
const detailsUrl = `${gamesUrl}${id}`;

fetch(detailsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

function createDetails(details) {
    const container = document.querySelector(".container");

    // select the loader and then remove it from the DOM
    const loader = document.querySelector(".loader");
    container.removeChild(loader);

    // create the heading
    const heading = document.createElement("h1");
    heading.innerText = details.name;

    container.appendChild(heading);

    // add the div with a background image
    const backgroundImage = document.createElement("div");
    backgroundImage.className = "details-image";
    backgroundImage.style.backgroundImage = `url("${details.background_image}")`;

    container.appendChild(backgroundImage);

    // add the description
    const description = document.createElement("div");
    description.className = "details-description";
    description.innerHTML = details.description;

    container.appendChild(description);

    // add the release date
    const releaseDate = document.createElement("time");
    releaseDate.className = "details-date";
    releaseDate.innerText = `Released: ${details.released}`;

    // insert the release date before the description
    description.before(releaseDate);

    // add the genre links using the exising function
    const genres = document.createElement("div");
    genres.className = "details-genres";
    genres.innerHTML = makeGenres(details.genres);

    container.appendChild(genres);

    // change the page title
    document.title = details.name + " | " + document.title;
}
