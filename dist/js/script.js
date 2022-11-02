// const isChecked = true;
// const isOpen = false;
// console.log(isChecked || isOpen);
const numberOfFilms = prompt("Скільки фільмів ви вже переглянули?", 10);
let lastFilmQuestion = prompt("Один з останніх переглянутих фільмів?", "");
let countLastFilm = prompt("Ваша оцінка останньому фільму", "");
const personalMovieDB = {
    count: numberOfFilms, 
    movies: {
        
    }, 
    actors: {}, 
    genres: [],
    privat: false,
};

personalMovieDB.movies[lastFilmQuestion] = countLastFilm;


console.log(numberOfFilms);
console.log(personalMovieDB.movies);