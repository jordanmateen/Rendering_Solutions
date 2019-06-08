
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder

    var cardHtml = pokerHand.map( (card)=>{
        return (
            `
            <img src="/cards/${card.value}${card.suit}.png" style = "width : 20%; height : 20%;" alt="...">
            
            `
        )
    })
    return `
        <div class="d-flex flex-row text-center mt-5">
            ${cardHtml.join('')}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}