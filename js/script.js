"use strict";

const numberOfFilms = +prompt("Сколько фильмов ты смотрел?", "");
 //1

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  //2

for (let i = 0; i < 2; i++){
    const   a = prompt("Один из последних фильмов" , ""),
            b = prompt("Оценка фильма" , "");
    
     if (a != null && b !=null && a != '' && b != '' && a.length < 50 && b.length < 50){
        personalMovieDb.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

if (personalMovieDb.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30){
    console.log('Просмотрено довольно много фильмов');
} else if (personalMovieDb.count > 30) {
    console.log('Вы киноман');
}  else {
    console.log('error');
}


console.log(personalMovieDb);