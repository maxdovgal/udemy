"use strict";

const numberOfFiles = +prompt("how many films do you watch?", "");
 //1

const personalMovieDb = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  //2

const   a = prompt("one of the last watching films" , ""),
        b = prompt("the mark of the film" , ""),
        c = prompt("one of the last watching films" , ""),
        d = prompt("the mark of the film" , "");

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);