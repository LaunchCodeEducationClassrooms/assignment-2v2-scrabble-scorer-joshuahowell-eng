// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

let userInput = '';
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question(`Let's play some scrabble!\nEnter a word: `);
   userInput = userInput + word;
   return userInput;
};

function simpleScore(word){
  word = word.toUpperCase();
  let letterPoints = 0;
  letterPoints += word.length;
  return letterPoints;
  };


function vowelBonusScore(word){
  word = word.toUpperCase();
  let vowel = ['A','E','I','O','U']
  let letterPoints = 0;
 for (let i = 0; i < word.length; i++){
    if (vowel.includes(word[i])){
       letterPoints += 3; }
      else {
        letterPoints++
        }
  }
return letterPoints;
}

function scrabbleScore(word){
  word = word.toLowerCase();
	let letterPoints = 0;
for (let i = 0; i < word.length; i++){
  letterPoints += newPointStructure[word[i]];
}  
	return letterPoints;
 }

const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scorerFunction: simpleScore,
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scorerFunction: vowelBonusScore,
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scorerFunction: scrabbleScore,
  }
];

function scorerPrompt(word) {
  scoringType = input.question
  
  (`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].name} ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name} ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name} ${scoringAlgorithms[2].description}\n\nEnter 0 - 2: `)


  if (scoringType == '0'){
    console.log(`Score for ${userInput} is ${scoringAlgorithms[0].scorerFunction(userInput)}`);
  }else if (scoringType == '1'){
    console.log(`Score for ${userInput} is ${scoringAlgorithms[1].scorerFunction(userInput)}`);
  } else if (scoringType == '2'){
    console.log(`Score for ${userInput} is ${scoringAlgorithms[2].scorerFunction(userInput)}`)
  } else {
  scorerPrompt();
  }
};

function transform(object) {;
newPointObject = {};
for (item in object)
  for (i = 0; i < object[item].length; i++){
    letter = object[item][i];
    item = Number(item);
    letter = letter.toLowerCase();
    newPointObject [letter] = item
  };
 return newPointObject; 
}
let newPointStructure;
newPointStructure = transform(oldPointStructure);


function runProgram() {
   initialPrompt();
   scorerPrompt();
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

