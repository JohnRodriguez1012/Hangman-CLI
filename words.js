var hangmanLetters =require("./letters.js");


var wordToGuess = function(word){
	this.word = word;

	this.wordArray = this.word.split("");

	this.wordDisplay = [];

	this.guessingLetters= [];

	this.holdArray = function() {
		for(var i = 0; i < this.wordArray.length; i++){
			this.displayWord.push("_");
		}
	}

	this.userGuessedLetter = function(userGuess){
		this.guessingLetters.push(userGuess);

		var letter;

		for (var i = 0; i < this.wordArray.length; i++){
			if(this.wordDisplay[i] != "_"){
				console.log(this.wordDisplay);
			}else if(this.wordArray[i] === userGuess && this.displayWord[i] === "_"){
				letter = new hangmanLetters(userGuess, true);
				this.displayWord[i] = letter.display()
			} else {
				letter = new hangmanLetters(userGuess, false);
				this.wordDisplay[i] = letter.display();
				}
			}
		return this.wordDisplay;
	};
}

module.exports = wordToGuess;