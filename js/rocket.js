var timer = null;
var countdownNumber = 10;

var changeState = function(state) {
	document.body.className = 'body-state'+state;
			clearInterval(timer);
			countdownNumber= 10;

		if (state == 2){
			timer = setInterval(function(){
				document.getElementById('countdown').innerHTML = countdownNumber;
				countdownNumber= countdownNumber -1;

				if (countdownNumber > 4 && countdownNumber <=7){
					document.getElementById('hol-up').className = "hol-up show"
				} else{
					document.getElementById('hol-up').className = "hol-up"
				};
				if(countdownNumber > 1 && countdownNumber <=3){
					document.getElementById('not-this').className = "not-this show"
				} else{
					document.getElementById('not-this').className = "not-this"
				};
				if (countdownNumber <=0){
					changeState(3);
				};
			}, 500);
			
		} else if(state ==3) {
			var success = setTimeout(function()
				{
					var randomNumber= Math.round(Math.random()*10);
					console.log('randomNumber:', randomNumber)
					//success
					if (randomNumber > 2) {
						changeState(4);
					} else {
						changeState(5); //oh no!!
					}
			}, 2000);
		};
}