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
    });

    //Remover movie details when mouse leaves
    thumbnail.addEventListener('mouseleave', () => {
        thumbnail.removeChild(thumbnailTitle);
        thumbnail.removeChild(thumbnailDescription);
    })
});

function findMovieDetails(id){
    thumbnailTitle.innerText = netflix['series'][id]['title'];
    thumbnailDescription.innerText = netflix['series'][id]['description'];
};