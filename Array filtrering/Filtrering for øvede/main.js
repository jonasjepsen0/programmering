const movies = [
  { title: "A New Hope", year: 1977, rating: 8.6, isFavorite: true },
  { title: "The Phantom Menace", year: 1999, rating: 6.5, isFavorite: false },
  { title: "Empire Strikes Back", year: 1980, rating: 8.7, isFavorite: true },
  { title: "Attack of the Clones", year: 2002, rating: 6.6, isFavorite: false },
  { title: "Return of the Jedi", year: 1983, rating: 8.3, isFavorite: true }
];

const goodMovies = movies.filter( movie => movie.rating > 8 );
console.log(goodMovies)

const movies2 = [...movies]
const movies2000 = movies2.filter( movie => movie.year < 2000 );
console.log(movies2000.sort((a, b) => a.year - b.year))

const movies3 = [...movies]
const currentyear = 2026
const favorite = []

for ( const movie3 of movies3){
  if (movie3.isFavorite) {
    favorite.push({
      Name: movie3.title,
      Age: currentyear - movie3.year,
    })
  }
}

console.log(favorite)

const keyword = "the"

const result = movies.filter( movie  => movie.title.toLowerCase().includes(keyword.toLowerCase()));

console.log(result)

const movies4 = [...movies]

const top3 = movies4.sort((a, b) => b.rating - a.rating).slice(0, 3)

console.log(top3)

const top3titles = []

for (const top3movies of top3){
  top3titles.push(top3movies.title)
}

console.log(top3titles)