// In this project we will build the Magic Eight Ball using control flow in JavaScript.
// 
// The user will be able to input a question, then our program will output a random fortune.


let userName = '';
userName ? console.log(`Hello, ${userName}`) : console.log(`Hello!`)

const userQuestion = 'Will I sleep well tonight?';

console.log(`The ${userName} asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

if(randomNumber === 0) {
  eightBall = 'It is certain'
} else if(randomNumber === 1){
  eightBall = 'It is decidedly so'
} else if(randomNumber === 2){
  eightBall = 'It is decidedly so'
} else if(randomNumber === 3){
  eightBall = 'Reply hazy try again'
} else if(randomNumber === 4){
  eightBall = 'Cannot predict now'
} else if(randomNumber === 5){
  eightBall = 'Do not count on it'
} else if(randomNumber === 6){
  eightBall = 'My sources say no'
} else if(randomNumber === 7){
  eightBall = 'Outlook not so good'
} else if(randomNumber === 8){
  eightBall = 'Signs point to yes'
}

console.log(eightBall);
