const  numbers  = [ 1, 2, 3 ];
const  moreNumbers  = [ ...numbers, 4, 5 ];
console.log(moreNumbers)

const original = [ "Anna", "Mads", "Lea" ];
const copy = [...original]

const student = { name: "Anna", age: 25 };
const updatedStudent = { ...student, age: 26 };
console.log(updatedStudent)

const a = { x: 1 };
const b = { y: 2 };
const  all  = { ...a, ...b };
console.log(all)

function average(...numbers) {
  let sum = 0;

  for (let number of numbers) 
    sum += number;
  

  return sum / numbers.length;
}

console.log(average(...numbers))