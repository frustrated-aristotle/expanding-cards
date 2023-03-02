const cards = document.querySelectorAll(".card-img");
let selectedCard;
let previousCard;
cards.forEach(card =>{
    card.addEventListener("click", () => {
        previousCard = selectedCard;
        selectedCard = card;
        card.id = "selected";
        if(previousCard !== undefined)
            previousCard.id= "not-selected";
    })
})