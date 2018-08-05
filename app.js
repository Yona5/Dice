/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var player1 = "player1", player2 = "player2", current_player = player1;
var player1_g_score = 0, player2_g_score = 0, player1_g_round_score = 0, player2_g_round_score = 0;

function rollDice() {

	var player1_score = document.getElementById("score-0");
	var player2_score = document.getElementById("score-1");
	var player1_round_score = document.getElementById("current-0");
	var player2_round_score = document.getElementById("current-1");
	var dice = document.getElementById("dice");
	var player_0_panel = document.getElementById("player-0-panel");
	var player_1_panel = document.getElementById("player-1-panel");
	//console.log("current player " + current_player);
	var diceFace = Math.floor(Math.random() * 6) + 1;
	switch(diceFace){
		case 1:
			dice.src = "dice-1.png";
			break;
		case 2:
			dice.src = "dice-2.png";
			break;
		case 3:
			dice.src = "dice-3.png";
			break;
		case 4:
			dice.src = "dice-4.png";
			break;
		case 5:
			dice.src = "dice-5.png";
			break;
		case 6:
			dice.src = "dice-6.png";
			break;
	}

	if (current_player == player1) {
		// console.log("in player1");
		// console.log(diceFace);
		if (diceFace == 1) {
			player1_g_score -= player1_g_round_score;
			player1_score.innerHTML = player1_g_score;
			player1_g_round_score = 0;
			player1_round_score.innerHTML = player1_g_round_score;
			current_player = player2;
			player_0_panel.classList.remove("active");
			player_1_panel.classList.add("active");
		}
		else{
			player1_g_round_score += diceFace;
			player1_g_score += diceFace;
			player1_round_score.innerHTML = player1_g_round_score;
			player1_score.innerHTML = player1_g_score;
			if (player1_g_score >= 100) {
				alert("Congrats player1! You have won");
				document.getElementById("btn-hold").disabled = true;
				document.getElementById("btn-roll").disabled = true;
			}
			document.getElementById("btn-hold").onclick = function(){
				current_player = player2;
				player_0_panel.classList.remove("active");
				player_1_panel.classList.add("active");
				player1_g_round_score = 0;
				player1_round_score.innerHTML = player1_g_round_score;
			}
		}
	}

	else if(current_player == player2){
		// console.log("in player2");
		// console.log(diceFace);
		if (diceFace == 1) {
			player2_g_score -= player2_g_round_score;
			player2_score.innerHTML = player2_g_score;
			player2_g_round_score = 0;
			player2_round_score.innerHTML = player2_g_round_score;
			current_player = player1;
			player_1_panel.classList.remove("active");
			player_0_panel.classList.add("active");
		}
		else{
			player2_g_round_score += diceFace;
			player2_g_score += diceFace;
			player2_round_score.innerHTML = player2_g_round_score;
			player2_score.innerHTML = player2_g_score;
			if (player2_g_score >= 100) {
				alert("Congrats player2! You have won");
				document.getElementById("btn-hold").disabled = true;
				document.getElementById("btn-roll").disabled = true;
			}
			document.getElementById("btn-hold").onclick = function(){
				current_player = player1;
				player_1_panel.classList.remove("active");
				player_0_panel.classList.add("active");
				player2_g_round_score = 0;
				player2_round_score.innerHTML = player2_g_round_score;
			}
		}
	}
	document.getElementById("btn-new").onclick = function(){
		if (confirm("Do you want to restart the game?")) {
			player1_g_score = 0;
			player2_g_score = 0;
			player1_g_round_score = 0;
			player2_g_round_score = 0;
			player1_score.innerHTML = 0;
			player2_score.innerHTML = 0;
			player1_round_score.innerHTML = 0;
			player2_round_score.innerHTML = 0;
			current_player = player1;
			dice.src = "3d_dice.png";
			player_1_panel.classList.remove("active");
			player_0_panel.classList.add("active");
			document.getElementById("btn-hold").disabled = false;
			document.getElementById("btn-roll").disabled = false;
		}
	}
}
