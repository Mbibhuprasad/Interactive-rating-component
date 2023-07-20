// selecting element
let firstCard = document.getElementById("firstcard");
let secondCard = document.getElementById("secondcard");
let number = document.getElementById("number");
let ratings = document.getElementsByClassName("rates");

// looping for access number

for (let i = 0; i < 5; i++){
   ratings[i].addEventListener('click', function(e){
    number.innerHTML = ratings[i].innerHTML;

})
}
// function defination
function showCard(){
    secondCard.style.display="block";
    firstCard.style.display="none";
}
