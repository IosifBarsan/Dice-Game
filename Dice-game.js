const btn = document.getElementById('roll-btn');

function randomDice() {

    return Math.floor(Math.random() * 6) + 1;
}


btn.addEventListener('click', () => {
    let dice1 = `/images/Dice ${randomDice()}.png`;
    let dice2 = `/images/Dice ${randomDice()}.png`;
    document.getElementById('img1').setAttribute('src', dice1);
    document.getElementById('img2').setAttribute('src', dice2);
})

