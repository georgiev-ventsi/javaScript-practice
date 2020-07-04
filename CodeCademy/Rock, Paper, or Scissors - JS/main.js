// Rock, Paper, or Scissors

// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

// The possible outcomes are:

//     Rock destroys scissors.
//     Scissors cut paper.
//     Paper covers rock.
//     If there’s a tie, then the game ends in a draw.

// Our code will break the game into four parts:

//     Get the user’s choice.
//     Get the computer’s choice.
//     Compare the two choices and determine a winner.
//     Start the program and display the results.


const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
      console.log('Error! Yur input is not correct!');
    }
  }; 
  
  const getComputerChoice = () => {
    let computerNumber = Math.floor(Math.random() * 3);
    if(computerNumber === 0){
      return 'rock';
    } else if(computerNumber === 1){
      return 'paper';
    } else if(computerNumber === 2){
      return 'scissors';
    }
  }
  
  function determineWinner(userInput, computerChoice){
    if(userInput === computerChoice){
      return 'The game was a tie. Try again';
    }
    
    if(userInput === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer win';
      } else {
        return 'User win';
      }
    }
    
    if(userInput === 'paper'){
      if(computerChoice  === 'scissors'){
        return 'Computer win';
      } else {
        return 'User win';
      }
    }
      
    if(userInput === 'scissors'){
      if(computerChoice  === 'rock'){
        return 'Computer win';
      } else {
        return 'User win';
      }
    }
  }
  
  function playGame(){
    let userChoice = getUserChoice('rock');
    // moje da se napravi userChoice kato vhod na playGame i da se iziskva oshte pri start
    
    let computerChoice = getComputerChoice();
    
   console.log(determineWinner(userChoice, computerChoice))
  }
  playGame();
  