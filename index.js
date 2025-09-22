//to carry out repetitive tasks we have to use loops//

//make sure you dont have a condition that stops your loop so you dont have infinite loops//

//sum from 1 to a givn number. 1-100

for (let i = 1; i <= 20; i++) {
    if ( i % 2 === 0) {
        console.log(i)
    }
}

// write a program that prints the multiplication table of 5 using a loop
// write a program that prints number from 10 down to 1 using a loop

for (let i = 1; i >= 10; i++) {
    console.log(`5* ${i} = ${5 * i}`);
}

// on the above for loop. in the loop header is i variable which we set to 1. this is our counter
// secondly we set the condition that we want our loop to stop running at >=10. then we set i to 
// update each time its increased by 1.
// in the console log $(i) shows the current number. ${5*1} shows the results of multiplying 5 
// by tht number

for(let i = 10; i >=1; i--) {
    console.log(i);
}

let celcius = [ 20, 30, 40, 50]
let fahrenheit = [];

for (let i = 0; i < celcius.length; i++) {
    fahrenheit.push(celcius[i] * 9/5 + 32);


}

const saving = [20, 24, 20, 35]

const increasedSavings = saving.map((element) => {
    return element * 2
})


let students = ["divine", "glory", "amanda", "blessing", "eniola"]

const capitalizedStudents = students.map((studentName) => {
  const firstLetter = studentName.charAt(0).toUpperCase()

  const remainingLetters = studentName.slice(1)

  return firstLetter + remainingLetters
})

filter 


let movies = [
  {name: "Avengers", rating: 8},
  {name: "Sabrina", rating: 4},
  {name: "How to kill a gorrila", rating: 2},
  {name: "Korean movies", rating: 9},
  {name: "Criminal", rating: 10},
  {name: "Dexter", rating: 3}
]

const filteredMovies = movies.filter((film) => {
  return (film.rating > 5)
})


let cart = [
  { item: "Laptop", price: 350000 },
  { item: "Phone", price: 120000 },
  { item: "Earphones", price: 8000 },
  { item: "Mouse", price: 5000 },
  { item: "Monitor", price: 90000 }
];

const expensiveItems = cart.filter((items) => {
  return items.price > 50000
})

console.log(expensiveItems)