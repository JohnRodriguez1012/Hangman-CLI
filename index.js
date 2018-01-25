//Additional File
var words = require("./words.js");
var letters = require("./letters.js")
//Packages
var inquirer = require("inquirer");
var prompt = require("prompt");

var word = function(word){
	this.word = word;
};
//
var guessingWords = new word ("pomegranate");

guessingWords.holdArray();


function wordAccuracy (gameWord){

	var userGuess = gameWord.showWord.join("");
	console.log(userGuess);

	if(userGuess = gameWord.word){
		console.log("Congrats! YOU DONE DID IT!");
		return true;
	} else{
		console.log("Keep guessing!")
		return false;
	}
}

function pregunta (){
inquirer.prompt([{
		type: "input",
		name: "modeSelect",
		message: "Guess a Letter! Guess the right word and you'll win a prize!!!",
	}]).then( function (response) {
			
			//ask the user to guess a letter
			console.log(response.modeSelect);

			//check to see if the user guessed right, if so replace the letter
			selectedWord.newLetter(response.modeSelect);

			
		    console.log(selectedWord.displayWord);
			
			//check to see if the word is guessed if not ask the question again
			var checking = wordAccuracy(selectedWord);
			console.log(checking);
			if(checking === false){
				pregunta()
			}


	})
}

pregunta();
