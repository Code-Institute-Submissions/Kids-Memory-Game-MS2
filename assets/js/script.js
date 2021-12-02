const cards = document.querySelectorAll('.cards');

let clickedCard = null;


function flipCard(){
    this.classList.add('flip');
   console.log(this.getAttribute('data-img'));
   this.classList.remove('color-hidden');

}
cards.forEach (card => card.addEventListener('click', flipCard));



  
    

