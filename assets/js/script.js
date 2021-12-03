const cards = document.querySelectorAll('.cards');
let hasFlippedCard = false;
let firstCard;
let secondCard;


function flipCard(){
   
   this.classList.remove('color-hidden');

   if(!hasFlippedCard){
       hasFlippedCard = true;
       firstCard = this;
   } else{
       hasFlippedCard = false;
       secondCard = this;

    if (firstCard.dataset.img === secondCard.dataset.img){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    } else{
        setTimeout(() => {
        firstCard.classList.add('color-hidden');
        secondCard.classList.add('color-hidden');
    }, 1500); }

    console.log(firstCard, secondCard);
   }

}
cards.forEach (card => card.addEventListener('click', flipCard));



  
    

