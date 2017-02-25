$(document).ready(function(){

//Declaring Variables and Values.
var wins = 0;
var losses = 0;
var totalScore = 0;
$("#TotalScore").text(totalScore);

// Generating a random number between 19-120.
var randomNumber = Math.floor(Math.random()* 101)+19;
document.getElementById("RandomNumber").innerHTML=randomNumber;

// Generating a random number for each crystal.
var yellowCrystal = Math.floor(Math.random()* 12)+1;
var blueCrystal = Math.floor(Math.random()* 12)+1;
var redCrystal = Math.floor(Math.random()* 12)+1;
var greenCrystal = Math.floor(Math.random()* 12)+1;

// Created this function called "newGame" to reset the game whenever the user wins or loses.
	function newGame(){
	
	randomNumber = Math.floor(Math.random()* 101)+19;
	document.getElementById("RandomNumber").innerHTML=randomNumber;

	yellowCrystal = Math.floor(Math.random()* 12)+1;
	blueCrystal = Math.floor(Math.random()* 12)+1;
	redCrystal = Math.floor(Math.random()* 12)+1;
	greenCrystal = Math.floor(Math.random()* 12)+1;

	

}
// Created this function called "resetScore" to reset my total points after a win or lose.
	function resetScore() {
		totalScore = 0;
		$("#TotalScore").text(totalScore);
	}

// Created 'click' functions below for each crystal using jquery.

	//Yellow Crystal strats here
	$('#yellow').on('click', function() {
		var yellow = yellowCrystal;
		totalScore = totalScore + yellow;
		$("#TotalScore" ).text(totalScore);
			console.log(yellow);

		if (totalScore === randomNumber){
		wins++;
		newGame();
		resetScore();
		}
		else if (totalScore > randomNumber){
			losses++;
			newGame();
			resetScore();	

		}

	var html = "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

          document.querySelector("#Game").innerHTML = html;
    });
			
	// Red Crystal starts here.
	$('#red').on('click', function() {
		var red = redCrystal;
		totalScore = totalScore + red;
		$("#TotalScore" ).text(totalScore);
			console.log(red);

		if (totalScore === randomNumber){
		wins++;
		newGame();
		resetScore();
	
	}
		else if (totalScore > randomNumber){
			losses++;
			newGame();
			resetScore();
			
		}

	var html = "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

          document.querySelector("#Game").innerHTML = html;
    });

    //Blue crystal start here.
	$('#blue').on('click', function() {
		var blue = blueCrystal;
		totalScore = totalScore + blue;
		$("#TotalScore" ).text(totalScore);
			console.log(blue)

		if (totalScore === randomNumber){
		wins++;
		newGame();
		resetScore();
	}
		else if (totalScore > randomNumber){
			losses++;
			newGame();
			resetScore();
			
		}
		
	var html = "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

          document.querySelector("#Game").innerHTML = html;
	});

	//Green crystal start here.
	$('#green').on('click', function() {
		var green = greenCrystal;
		totalScore = totalScore + green;
		$("#TotalScore" ).text(totalScore);
			console.log(green);
		
		if (totalScore === randomNumber){
		wins++;
		newGame();
		resetScore();
	}
		else if (totalScore > randomNumber){
			losses++;
			newGame();
			resetScore();
			
		}

	var html = "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>";

          document.querySelector("#Game").innerHTML = html;
    });
    //End of progam.

});


