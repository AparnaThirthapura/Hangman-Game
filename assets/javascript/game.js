


		var arr1 = ["hamlet", "macbeth", "julius caesar", "othello", "king lear"];
		// var arr2 = ["assets/images/hamlet.jpg"];
		
		var win = 0;
		var guessesLeft = 10;
		var lettersGuessed = [];

		var compGuess;
		var imagePath;

		initializeValues();
		displayGameStatus();


		function initializeValues(){
			guessesLeft = 10;
			var randomNum = Math.floor(Math.random() * arr1.length);

			compGuess = arr1[randomNum];
			// var imagePath = arr2[randomNum];

			lettersGuessed = [];
			displayGameStatus();
		}

		function displayGameStatus(){
			// document.getElementById("score").innerHTML = "<h1>wins:" + win + "</h1>" + " <h1>losses: " + lose + " </h1> " + "<h1>Guesses Left" + guessLeft;
			var placeholder = "";
			var justWon = true;

			for(var i = 0; i < compGuess.length; i++){
				if (lettersGuessed.indexOf(compGuess.charAt(i)) == -1) {
					placeholder = placeholder + "- ";
					justWon = false;
				} else {
					placeholder += compGuess.charAt(i)+" ";
				}
		}


		var html = "<p> wins:" + win + "</p>" + 
						"<h3>" + placeholder + "<br></h3>" + 
						"<p> guessesLeft:" + guessesLeft + "</p>" + 
						"<p> lettersGuessed:" + lettersGuessed + "</p>"  + 
						"<button onclick=\"initializeValues();\">Reset</button>";

			document.querySelector("#score").innerHTML = html;
		}

		document.onkeyup = function(event){
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			if(lettersGuessed.indexOf(userGuess) > -1){
				return;
			}
			
			lettersGuessed.push(userGuess);

			if(compGuess.includes(userGuess)){
				displayGameStatus();
			}
			else{
				guessesLeft--;
				displayGameStatus();
			}

			if(guessesLeft === 0){
				initializeValues();
			}


			var justWon = true;
			for(var i = 0; i < compGuess.length; i++){
				if (lettersGuessed.indexOf(compGuess.charAt(i)) == -1) {
					justWon = false;
				} 
			}

			if (justWon) {
				win++;
				
				displayGameStatus();
			}


			displayGameStatus();
			
		}

		document.onmouseclick()

		


