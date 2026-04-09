const  names  = [ "Luke", "Leia", "Anakin" ];
console.log(names.sort())

const numbers = [ 10, 2, 5, 1, 20, 3 ];
console.log(numbers.sort())
console.log(numbers.sort((a, b) => a - b))

console.log(numbers.sort((a, b) => b - a))

const movies = [
  { title: "A New Hope", year: 1977 },
  { title: "The Empire Strikes Back", year: 1980 },
  { title: "Return of the Jedi", year: 1983 },
  { title: "The Phantom Menace", year: 1999 }
];

console.log(movies.sort((a, b) => b.year - a.year))

const movies2 = [
  { title: "A New Hope", year: 1977 },
  { title: "The Empire Strikes Back", year: 1980 },
  { title: "Return of the Jedi", year: 1983 },
  { title: "The Phantom Menace", year: 1999 }
];

movies2.sort( (a, b) => a.title.localeCompare( b.title ));
console.log(movies2)

const movies3 = [
  { title: "A New Hope", year: 1977 },
  { title: "The Empire Strikes Back", year: 1980 },
  { title: "Return of the Jedi", year: 1983 },
  { title: "The Phantom Menace", year: 1999 }
];

movies3.sort( () => 0.5 - Math.random() );
console.log(movies3)

const movies4 = [
  { title: "A New Hope", year: 1977 },
  { title: "The Empire Strikes Back", year: 1980 },
  { title: "Return of the Jedi", year: 1983 },
  { title: "The Phantom Menace", year: 1999 }
];

const moviespread = [...movies4]
console.log(moviespread.sort((a, b) => b.year - a.year))
console.log(movies4)