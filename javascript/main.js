import netflix from '../neflix-titles/netflix-titles.json' assert {type:'json'};
let thumbnailTitle = document.createElement('h1');
let thumbnailDescription = document.createElement('p');

let thumbnails = document.querySelectorAll('.movie-thumbnails');
thumbnails.forEach(thumbnail => {

    //Add movie details on hover
    thumbnail.addEventListener('mouseover', () => {
        let thumbnailID = thumbnail.getAttribute('id');
        function findMovieDetails(x){
            thumbnailTitle.innerText = netflix['series'][thumbnailID]['title'];
        };
        findMovieDetails(thumbnailID);
        thumbnail.appendChild(thumbnailTitle);
    });

    //Remover movie details when moude leaves
    thumbnail.addEventListener('mouseleave', () => {
        thumbnail.removeChild(thumbnailTitle)
    })
})