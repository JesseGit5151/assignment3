let playerPrompt;
let rand = parseInt(Math.random() * 3);
console.log(rand)
let compChoice;


if(rand === 0) {
    compChoice = 'rock';
} else if(rand === 1) {
    compChoice = 'paper';
} else if(rand === 2) {
    compChoice = 'scissors';
}else{
    console.log('error');
}


playerPromp = prompt('Please enter rock paper or scissors');

function compareTwo() {
    do {
        playerPrompt = prompt('Please enter a correct value.');
    }
    while(playerPrompt !== 'rock' && playerPrompt !== 'paper' && playerPrompt !== 'scissors');

    if(compChoice === 'rock' && playerPrompt === 'paper') {
        alert('You win! Paper covers rock!');
    } else if(compChoice === 'paper' && playerPrompt === 'rock') {
        alert('You lose! Paper covers rock!');
    } else if(compChoice === 'scissors' && playerPrompt === 'paper') {
        alert('You lose! Scissors cuts paper!');
    } else if(compChoice === 'paper' && playerPrompt === 'scissors') {
        alert('You Win! Scissors cuts paper!');
    } else if(compChoice === 'scissors' && playerPrompt === 'rock') {
        alert('You win! rock smashes scissors!');
    } else if(compChoice === 'rock' && playerPrompt === 'scissors') {
        alert('You lose! rock smashes scissors!');
    } else if(compChoice === playerPrompt) {
        alert('Its a tie!')
    } else {
        console.log('error')
    }
    }
    
compareTwo();