const cards = document.querySelectorAll('.cards');
const randomNum = [...document.querySelectorAll('.random')];
const reset = document.getElementById('reset');
let moves = 0;
let counter = document.querySelector(".moves");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

document.body.onload = startGame();

console.log(reset);

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
  
  
// SHUFFLE CARDS


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


matchingCards();
moveCounter()
    
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


  // MOVES COUNT

function moveCounter(){    
    moves++;    
    counter.innerHTML = moves;

    if(moves === 1){
        second = 0;
        minute = 0;
        hour = 0;
startTimer();
        
    }
}

// TIMER
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;

function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute + " mins "+ second + " secs";
        second++; 
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

// START GAME

function startGame(){

    // reset moves
    moves = 0;
    counter.innerHTML = moves;
    
    //reset timer
    second = 0;
    minute = 0; 
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
    }

    //RESET

   reset.addEventListener('click', resetGame);

   function resetGame(){
       startGame();
   }