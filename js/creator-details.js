const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/creators.html";
}

const creatorsUrl = `https://api.rawg.io/api/creators/`;
const detailUrl = `${creatorsUrl}${id}`;
