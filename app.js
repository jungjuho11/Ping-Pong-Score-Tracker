//the id in index.html was p1Button and p2Button within button tags
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function() {
    if (!isGameOver){
        p1Score += 1;
        if (p1Score === winningScore){
            isGameOver = true;
        }
    }
    p1Display.textContent = p1Score;
})

p2Button.addEventListener('click', function() {
    if (!isGameOver){
        p2Score += 1;
        if (p2Score === winningScore){
            isGameOver = true;
        }
    }
    p2Display.textContent = p2Score;
})

winningScoreSelect.addEventListener('change', function(){
    //this is print out this object that are listening to
    //alert(this.value);

    //changes the value from string to int
    winningScore = parseInt(this.value);
    reset();
})

//if you do reset(), that means you are are executing it
//right now, we are just passing in the reference
resetButton.addEventListener('click', reset )

function reset () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
}