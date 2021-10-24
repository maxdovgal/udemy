"use strict";

let numberOfFilms;

 function start() {
    numberOfFilms = prompt("Сколько фильмов ты смотрел?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов ты смотрел?", "");
    }
 }

 start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}

// rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDb.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30){
        console.log('Просмотрено довольно много фильмов');
    } else if (personalMovieDb.count > 30) {
        console.log('Вы киноман');
    }  else {
        console.log('error');
    }
}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDb);
    }
}

// showMyDB(personalMovieDb.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) { 
        personalMovieDb.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres ();

console.log(personalMovieDb);

const options = {
    name1: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length); 
//определяет количество ключей в обьекте