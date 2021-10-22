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

for (let i = 0; i < personalMovieDb.count; i++){
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

console.log(personalMovieDb);