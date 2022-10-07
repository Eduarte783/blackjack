let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

if (sum <= 20) {
  console.log("Do you want another card?")
  isAlive = false
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack!")
  hasBlackjack = true
} else {
  console.log("You're out of the game!")
  isAlive = false
}

// Cash out 
console.log(isAlive)


// <<< IF STATEMENTS (PRACTICE 1) >>>>)

// let age = 25

// if (age < 21) {
//   console.log("You can not enter the club!")
// } else {
//   console.log("Welcome in!")
// }

// IF STATEMENTS (PRACTICE 2)

// let age = 102

// if (age < 100) {
//   console.log("Not eligible")
// } else if (age === 100) {
//   console.log("Here is your birthday card from the king!")
// } else {
//   console.log("Not eligible, you have already gotten one")
// }