let firstCard = 10
let secondCard = 8
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
  renderGame()
}
function renderGame() {
  if (sum <= 20) {
    message = "Do you want another card?"
    isAlive = false
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackjack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  cardsEl.textContent = "Cards: " + cards[0] + " and " + cards[1]
  sumEl.textContent = "Sum: " + sum
  messageEl.textContent = message

}

function newCard() {
  let card = 6
  sum += card
  renderGame()
}

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