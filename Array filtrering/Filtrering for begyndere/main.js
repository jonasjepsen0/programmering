const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter( numbers => numbers % 2 === 0 );

console.log(evenNumbers)

const movies = [
  { title: "A New Hope", year: 1977, isFavorite: true },
  { title: "The Phantom Menace", year: 1999, isFavorite: false },
  { title: "Empire Strikes Back", year: 1980, isFavorite: true }
];

const oldMovies = movies.filter( movie => movie.year < 1980 );

console.log(oldMovies)

const keyword = "hope";

const result = movies.filter( movie  => movie.title.toLowerCase().includes(keyword.toLowerCase()));

console.log(result)

const  noFavorites  =  movies.filter( movie => !movie.isFavorite );

console.log(noFavorites)

const newMovies = movies.filter( movie => movie.year > 1990 );

console.log(newMovies)

