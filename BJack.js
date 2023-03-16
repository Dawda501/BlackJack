let cards = []
let sumOfCards = 0
let firstCard = getRandomCard()
let lastCard = getRandomCard()
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let message = ""
let isAlive = true
let hasBlackJack = false


function getRandomCard() {
	randomCard = Math.floor(Math.random() * 13) + 1

	
if (randomCard > 10){
	return 10
}

else if(randomCard === 1){
	return 11
}
else {
	return randomCard
}
return randomCard
}


function start(){
	isAlive = true
	let firstCard = getRandomCard()
	let lastCard = getRandomCard()
	cards = [firstCard,lastCard]
	sumOfCards = firstCard + lastCard
	render()


}

function render() {
	cardsEl.textContent = "Cards: " 
	for(let i = 0; i < cards.length; i++){
		cardsEl.textContent += cards[i] + " "
			}
			sumEl.textContent = sumOfCards 
if(sumOfCards > 21){
	messageEl.textContent = "You are out of the game" 
	isAlive = false


}
 else if(sumOfCards === 21){
 	messageEl.textContent = "You've got BlackJack!!"
 	hasBlackJack = true
 }
else {
	messageEl.textContent = "Do you want to draw another card?"
}



 } 

 function newCard(){ 
if(isAlive === true && hasBlackJack === false){
 		let newcard = getRandomCard()
 		cardsEl.textContent += newcard + " "
 		sumOfCards += newcard
 		cards.push(newcard)
 		render()
}
 }