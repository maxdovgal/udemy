"use strict";

const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDb.count = prompt("Сколько фильмов ты смотрел?", "");
    
        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)){
            personalMovieDb.count = prompt("Сколько фильмов ты смотрел?", "");
        }
     },
     rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDb.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30){
            console.log('Просмотрено довольно много фильмов');
        } else if (personalMovieDb.count > 30) {
            console.log('Вы киноман');
        }  else {
            console.log('error');
        }
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDb);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDb.privat){
            personalMovieDb.privat = false;
        } else{
            personalMovieDb.privat = true;
        }
    },
    // writeYourGenres: function() {
    //     for (let i = 1; i <= 3; i++) { 
    //         let genre = prompt (`Ваш любимый жанр под номером ${i}`);
    //         personalMovieDb.genres[i-1] = genre;

    //         if (genre === '' || genre == null){
    //             console.log('Вы ввели некоректные данные или не ввели их вовсе');
    //             i--;
    //         } else {
    //             personalMovieDb.genres[i-1] = genre; 
    //         }
    //     }

    //     personalMovieDb.genres.forEach((item, i) => {
    //         console.log(`Любимый жанр ${i +1} - это ${item}`);
    //     });
    // }
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) { 
            let genres = prompt (`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null){
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDb.genres = genres.split(', '); 
                personalMovieDb.genres.sort();
            }
        }

        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i +1} - это ${item}`);
        });
    }
};


// const options = {
//     name1: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(Object.keys(options).length); 
//определяет количество ключей в обьекте