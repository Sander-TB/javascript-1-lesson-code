const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
	id = params.get("id");
} //else document.location.href = "creators.html";

const creatorsUrl = `https://api.rawg.io/api/creators/`;
const detailUrl = `${creatorsUrl}${id}`;

fetch(detailUrl)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createCreator(json);
	})
	.catch(function(error) {
		//document.location.href = "error.html"
	});

function createCreator(json) {
	const loader = document.querySelector(".loader");
<<<<<<< Updated upstream
	const creatorDetailContainer = document.querySelector(
		".creator-detail-container"
	);
=======

	const creatorDetailContainer = document.querySelector(
		".creator-detail-container"
	);
	creatorDetailContainer.classList.remove("hidden");
>>>>>>> Stashed changes

	const image = document.querySelector(".creator-image");

	image.src = json.image;
	image.alt = json.name;

	if (json.image) {
		image.src = json.image;
	} else if (json.image_background) {
		image.src = json.image_background;
	} else "https://via.placeholder.com/250";

	const name = document.querySelector(".creator-name");
	name.innerHTML = json.name;

	const gameCount = document.querySelector(".game-count");
	gameCount.innerHTML = json.games_count;

	const description = document.querySelector(".creator-description");
	description.innerHTML = json.description;

	const reviewsCount = document.querySelector(".reviews-count");
	reviewsCount.innerHTML = json.reviews_count;

	const rating = document.querySelector(".rating");
	rating.innerHTML = json.rating;

	const ratingTop = document.querySelector(".rating-top");
	ratingTop.innerHTML = json.rating_top;

<<<<<<< Updated upstream
	loader.classList.add("hidden");
	creatorDetailContainer.classList.remove("hidden");

	console.dir(image);
=======
	console.dir(json);
>>>>>>> Stashed changes
}
