import netflix from '../neflix-titles/netflix-titles.json' assert {type:'json'};
let thumbnailTitle = document.createElement('h1');
let thumbnailDescription = document.createElement('p');

let thumbnails = document.querySelectorAll('.movie-thumbnails');
thumbnails.forEach(thumbnail => {

    //Add movie details on hover
    thumbnail.addEventListener('mouseover', () => {
        let thumbnailID = thumbnail.getAttribute('id');
        findMovieDetails(thumbnailID);
        thumbnail.append(thumbnailTitle, thumbnailDescription);
        thumbnail.style.backgroundImage = `url(../images/${netflix['series'][thumbnailID]['hoverImage']})`
    });

    //Remover movie details when mouse leaves
    thumbnail.addEventListener('mouseleave', () => {
        let thumbnailID = thumbnail.getAttribute('id');
        thumbnail.removeChild(thumbnailTitle);
        thumbnail.removeChild(thumbnailDescription);
        thumbnail.style.backgroundImage = `url(../images/${netflix['series'][thumbnailID]['originalImage']})`
    })
});

//Function to locate the movie details using the id
function findMovieDetails(id){
    thumbnailTitle.innerText = netflix['series'][id]['title'];
    thumbnailDescription.innerText = netflix['series'][id]['description'];
};