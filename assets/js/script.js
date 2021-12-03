const cards = document.querySelectorAll('.cards');
const randomNum = [...document.querySelectorAll('.random')];
const reset = document.getElementById('reset');
let moves = 0;
let counter = document.querySelector(".moves");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;


const animals = [
    'duck',
    'dolphin',
    'frog',
    'giraffe',
    'hippo',
    'owl',
    'seal',
    'turtle',
  ];
  
  

for (let animal of animals) {
  const cardAIndex = parseInt(Math.random() * randomNum.length);
  const cardA = randomNum[cardAIndex];
  randomNum.splice(cardAIndex, 1);
  cardA.className += ` ${animal}`;
  cardA.setAttribute('data-img', animal);

  const cardBIndex = parseInt(Math.random() * randomNum.length);
  const cardB = randomNum[cardBIndex];
  randomNum.splice(cardBIndex, 1);
  cardB.className += ` ${animal}`;
  cardB.setAttribute('data-img', animal);

}



function flipCard(){
   if (lockBoard) return;

   if(this === firstCard) return;

   this.classList.remove('color-hidden');

   if(!hasFlippedCard){
       hasFlippedCard = true;
       firstCard = this;
   } else{
       hasFlippedCard = false;
       secondCard = this;

moveCounter()
matchingCards();
    
   }

}

function matchingCards(){

    if (firstCard.dataset.img === secondCard.dataset.img){

        disableCards();
    } else {

            unflipCards();
    }

}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    }


function unflipCards(){
lockBoard = true;

    setTimeout(() => {
        firstCard.classList.add('color-hidden');
        secondCard.classList.add('color-hidden');
        lockBoard = false;
    }, 1500); 
}

function resetBoard(){
 [hasFlippedCard, lockBoard] = [false, false];
 [firstCard, secondCard] = [null, null];
}


cards.forEach (card => card.addEventListener('click', flipCard));


// RESET BUTTON
  
/*reset.addEventListener('click', resetGame);

function resetGame(){

}
*/

function moveCounter(){    
    moves++;    
    counter.innerHTML = moves;
}


