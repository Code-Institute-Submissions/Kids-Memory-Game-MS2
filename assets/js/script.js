let card = document.getElementsByClassName("card");
let cards = [...card];
let randomNum = null;
const reset = document.getElementById('reset');
let moves = 0;
let counter = document.querySelector(".moves");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;
matchCounter = 0;

const animals = [
    'cheetah',
    'deer',
    'flamingo',
    'giraffe',
    'lion',
    'monkey',
    'tiger',
    'zebra',
    
  ];


window.onload = startGame();




// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
   cards[i].addEventListener("click", flipCard);
};


// FUNCTION SHUFFLE
  function shuffleAnimals() {
    
    for (let animal of animals) {
        const cardAIndex = parseInt(Math.random() * randomNum.length);
        const cardA = randomNum[cardAIndex];
        randomNum.splice(cardAIndex, 1);
    
        if(cardA.getAttribute('data-img')?.length>0)
                cardA.classList.remove(cardA.getAttribute('data-img'));
         cardA.classList.add(animal);
        cardA.setAttribute('data-img', animal);
    
        const cardBIndex = parseInt(Math.random() * randomNum.length);
        const cardB = randomNum[cardBIndex];
        randomNum.splice(cardBIndex, 1);
    
        if(cardB.getAttribute('data-img')?.length>0)
                cardB.classList.remove(cardB.getAttribute('data-img'));
        cardB.classList.add(animal);
    
        cardB.setAttribute('data-img', animal);
    
    
        }
    }
 




// FLIP CARD FUNCTION
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

moveCounter();
matchingCards();

   }

}




//MATCHING CARDS
function matchingCards(){

    if (firstCard.dataset.img === secondCard.dataset.img){
       
        matchCounter+=1;
        disableCards();
        if(matchCounter==(cards.length/2)){
            clearInterval(interval);
        finalTime = timer.innerHTML;
    //show congratulations modal
    modal.classList.add("show");
    //showing move, rating, time on modal
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("totalTime").innerHTML = finalTime;
    //closeicon on modal
    closeModal();
    };
    
    } else {   unflipCards(); }
   
}





// DISABLE CARDS
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    }

// UNFLIP CARDS
function unflipCards(){
lockBoard = true;

    setTimeout(() => {
        firstCard.classList.add('color-hidden');
        secondCard.classList.add('color-hidden');
        lockBoard = false;
    }, 1500); 
}

//RESET BOARD
function resetBoard(){
 [hasFlippedCard, lockBoard] = [false, false];
 [firstCard, secondCard] = [null, null];


}




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
var second = 0, minute = 0; 
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

function startGame() {

    randomNum = [...document.querySelectorAll('.random')];

    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.add('color-hidden');

        cards[i].removeEventListener('click', flipCard);
        cards[i].addEventListener('click', flipCard);
    };
    firstCard = null;

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
    
    shuffleAnimals();
}

// HOW TO PLAY BTN

var div = document.getElementById('newpost');

document.getElementById('btnOne').addEventListener('click', showhide);

function showhide() {
  div.classList.toggle('visible');
}

// CONGRATULATION 

//modal
let modal = document.getElementById("popup1")
//stars list
//close icon in modal
 let closeicon = document.querySelector(".close");
//congratulations when all cards match, show modal and moves, time 



function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}
//for player to play Again 
function playAgain(){
    modal.classList.remove("show");
    startGame();
}
