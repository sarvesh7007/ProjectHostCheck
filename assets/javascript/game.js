$(document).ready(function() {

	var trivia = [
		question01=	{
			question: "What is Shah Rukh Khan's Mumbai based house called?",
			answers: ["A: Mannat", "B: Priya", "C: Lekha", "D: Swarna Mandir"],
			correctAnswer: 0,
		},
		question02= {
			question: "In which of these movies does Aamir Khan feature a double role?",
			answers: ["A: Rang De Basanti", "B: Lagaan", "C: Taare Zamin Par", "D: Dhoom 3"],
			correctAnswer: 3
		},
		question03= {
			question: "Salman Khan's screen name in the Bollywood movie Dabaang was?",
			answers: ["A: Mangal Pandey", "B: Chulbul Pandey", "C: Raju Pandey", "D: Rajnikanth Prassad"],
			correctAnswer: 1
		},
		question04= {
			question: "Bollywood actor chunky Pandey starred in which of these movies?",
			answers: ["A: Thank you", "B: Welcome ", "C: No Entry  ", "Housefull"],
			correctAnswer: 3,
		},
		question05= {
			question: "In Zindagi Nah milegi dobar where did the friends go?",
			answers: ["A: Canada", "B: Greece", "C: India", "D: Spain"],
			correctAnswer: 3,
		},
		question06= {
			question: "Who is the host of Kaun Baneg Crorepatti",
			answers: ["A; Akshay Kumar", "B: Karan Johar", "c: Sachin Tendulkar", "D: Amitabh Bacchan"],
			correctAnswer: 3,
		},
		question07=	{
			question: "What is Munna Bhai's partner in crime's name in the Bollywood series Munna Bhai?",
			answers: ["A: Munna", "B: Circuit", "C:Lucky", "D: Chotu"],
			correctAnswer: 1,
		},
		question08= {
			question: "Tujhe dekho to he jana ___?",
			answers: ["A:Sanam", "B: Jaanam", "C: Kasam ", "D: Kadam "],
			correctAnswer: 0
		},
		question09= {
			question: "What is Alia Bhatt's debut movie?",
			answers: ["A: Student of the Year", "B: Highway", "C: 2 States", "D: Humpty Sharma ki Dulhania"],
			correctAnswer: 0
		},
		question10= {
			question: "What is Prabhu Deva's other occupation besides directing?",
			answers: ["A:Choreography ", "B: Make-up Artist ", "C: Chef ", "D: Singing "],
			correctAnswer: 0
		},
		question11= {
			question: "Which singer was awarded  the Bharat Ratna in 2001?",
			answers: ["A: Kavita Krishna Murthy", "B: Lata Mangeshkar", "C: Sunidhi Chauhan", "D: Asha Bhosle"],
			correctAnswer: 1
		},
		question12= {
			question: "Which of the following is false about Indian Cinematograph Committee (ICC) of 1927?",
		answers: ["A: The ICC was assembled by the British government.", "B: The ICC encouraged Indian Cinema.", "C: The ICC supported the Quota Act of 1927.", "D: All of the above is true."],
		correctAnswer: 2
		},
		question13= {
			question: "Why did Indian Cinema start using song-and-dance routines?",
			answers: ["A: It looks nice", "B: People love dancing.", "C: To protect IC from Western impurities.", "D: It was influenced by Hollywood"],
			correctAnswer: 2
		},
		question14= {
			question: "When did cinema first arrive in India?",
			answers: ["A: 1896", "B: 1994", "C: 1931", "D: 1943"],
			correctAnswer: 0
		},
		question15= {
			question: "Which movie is known for its portrayal of the Kashmir issue?",
			answers: ["A: Shree 420", "B: Kati Patang", "C: Roja", "D: Chak de! India"],
			correctAnswer: 2
		},
		question16= {
			question: "When did the first kissing scenes in Indian Cinema appear?",
			answers: ["A: 60s", "B: 70s", "C: 80s", "D: 90s"],
			correctAnswer: 2
		},
		question17= {
			question: "Which of the following movies was not in our syllabus?",
			answers: ["A: Dilwale Dulhania Le Jayenge", "B: Kabhie Kushie Kabhie Gham", "C: Yeh Jawaani hai deewani ", "D:Roja"],
			correctAnswer: 2
		},
		question18= {
			question: "Who is Ashwariya Rai married to?",
			answers: ["A: Shahrukh Khan", "B: Salman Khan", "C: Anil Kapoor", "D: Abhishek Bacchan"],
			correctAnswer: 3
		},
		question19= {
			question: "When did the first kissing scenes in Indian Cinema appear?",
			answers: ["A: 60s", "B: 70s", "C: 80s", "D: 90s"],
			correctAnswer: 2
		},
		question20= {
			question: "Why did Indian Cinema start using song-and-dance routines?",
			answers: ["A: It looks nice", "B: People love dancing.", "C: To protect IC from Western impurities.", "D: It was influenced by Hollywood"],
			correctAnswer: 2
		},
		question21= {
			question: "Which movie is known for its portrayal of the Kashmir issue?",
			answers: ["A: Shree 420", "B: Kati Patang", "C: Roja", "D: Chak de! India"],
			correctAnswer: 2
		}];
	var audienceAnswers = ['A: 64%  B:  17%  C: 9%  D: 10%', 'A: 24%  B:  26%  C: 27%  D: 23%', 'A: 14%  B:  2%  C: 49%  D: 12%', 'A: 17%  B: 16%  C: 34%  D: 43%']
	var phoneAnswers = ['Sup dude. Uh, the answer is A. I mean ', "Hello Dear, I don't understand the question. But I think it's ", "How long do I have to tell you an answer? It's... ", 'I know this one. It is ',  "I'm just guessing, but I think it's "]
	var questionValue = [100, 1000, 5000, 10000, 32000, 64000, 125000, 250000, 500000, 1000000]
	var lettersKey = ['A','B','C','D'];
	var timer = 20;
	var gameStart = false;
	var difficulty = 1;
	var nextQuestion = true;
	var questionNumber = 0;
	var currentAnswer;
	var money = 0;
	var clockIsRunning = false;
	var buttonAIsOn = false;
	var buttonBIsOn = false;
	var buttonCIsOn = false;
	var buttonDIsOn = false;
	var mainTheme = new Audio ("assets/audio/main_theme.mp3");
	var selectButton = new Audio ("assets/audio/select_button.mp3");
	var wrongButton = new Audio ("assets/audio/wrong_button.mp3");
	var wonMillion = new Audio ("assets/audio/won_million.mp3");
	var musicOne = new Audio ("assets/audio/music_01.mp3");
	var musicTwo= new Audio ("assets/audio/music_02.mp3");
	var musicThree = new Audio ("assets/audio/music_03.mp3");
	var phoneRing = new Audio ("assets/audio/phone_ring.mp3");
	var letsPlay = new Audio ("assets/audio/lets_play.mp3");
	var fiftyFiftyOn = false;
	var phoneFriend = false;
	var audienceHelp = false;


	mainTheme.play();


	function startTrivia(){
		if  (gameStart === false){
			mainTheme.pause();
			musicOne.currentTime = 0;
			musicTwo.currentTime = 0;
			musicThree.currentTime = 0;
			buttonIsOn();
			fiftyFiftyOn = true;
			phoneFriend = true;
			audienceHelp = true;
			gameStart = true;
			questionNumber = 0;
			shuffle(trivia);
			$('.money-bar').removeClass('current-money');
			$('#money01').addClass('current-money');
			reset();
			lifelineSwitch();
			run();
			startClock();
		generateQuestion();
			console.log("game start is " + gameStart);
			console.log("question number is " + questionNumber);
		}else{
			console.log('start button didnt work')
		}
	}

	$('#start-button').on("click", function(){
		startTrivia();
	});

	function run() {
	      intervalId = setInterval(startClock, 1000);
 	}

 	//starts the timer
	function startClock(){
		timer--;
		if (timer > 9){
			$('#game-timer').html(":" + timer);
		}
			else {
				$('#game-timer').html(":0" + timer);
			}
		// console.log(timer);
		clockIsRunning = true;
		if (timer===0){
			stop();
			gameLose();

		}
	}


	function stop(){
		clearInterval(intervalId);
		clockIsRunning = false;
	}

	 function reset() {
	    timer = 31;
	    $("#display").text(":00");
	  }

	function changeMusic() {
		if (gameStart === true){
			if(questionNumber <5){
				musicOne.play();
			}else if (questionNumber >=5 && questionNumber <8){
				musicTwo.play();
				musicOne.pause();
			}else if (questionNumber > 7){
				musicThree.play();
				musicTwo.pause();
			}
		}else {
			musicOne.pause();
			musicTwo.pause();
			musicThree.pause();
		}
	};

	function calculateMoney(){
		money = questionValue[questionNumber] ;
		console.log("total money is " + money);
		if (questionNumber === 1){
			$('#money01').removeClass('current-money');
			$('#money02').addClass('current-money');
		}
		else if (questionNumber === 2){
			$('#money02').removeClass('current-money');
			$('#money03').addClass('current-money');
		}
		else if (questionNumber === 3){
			$('#money03').removeClass('current-money');
			$('#money04').addClass('current-money');
		}
		else if (questionNumber === 4){
			$('#money04').removeClass('current-money');
			$('#money05').addClass('current-money');
		}
		else if (questionNumber === 5){
			$('#money05').removeClass('current-money');
			$('#money06').addClass('current-money');
		}
		else if (questionNumber === 6){
			$('#money06').removeClass('current-money');
			$('#money07').addClass('current-money');
		}
		else if (questionNumber === 7){
			$('#money07').removeClass('current-money');
			$('#money08').addClass('current-money');
		}
		else if (questionNumber === 8){
			$('#money08').removeClass('current-money');
			$('#money09').addClass('current-money');
		}
		else if (questionNumber === 9){
			$('#money09').removeClass('current-money');
			$('#money10').addClass('current-money');
			gameWin();
		}
		else {
		}
	}

	function gameLose(){
		//display you lose
		stop();
		musicOne.pause();
		musicTwo.pause();
		musicThree.pause();
		letsPlay.play();
		fiftyFiftyOn = false;
		phoneFriend = false;
		audienceHelp = false;
		gameStart = false;
		$('.message').text("Game Over");
		console.log("you lose");
	}

	function gameWin(){
		musicOne.pause();
		musicTwo.pause();
		musicThree.pause();
		wonMillion.play();
		fiftyFiftyOn = false;
		phoneFriend = false;
		audienceHelp = false;
		stop();
		gameStart = false;
		$('.message').text("You're a Crorepatti!");
		console.log("you win");
	}

	function buttonIsOn(){
		buttonAIsOn = true;
		buttonBIsOn = true;
		buttonCIsOn = true;
		buttonDIsOn = true;
		console.log('button a is ' + buttonAIsOn);
		console.log('button b is ' + buttonBIsOn);
		console.log('button c is ' + buttonCIsOn);
		console.log('button d is ' + buttonDIsOn);
		$('#answerA').removeClass('disabled');
		$('#answerB').removeClass('disabled');
		$('#answerC').removeClass('disabled');
		$('#answerD').removeClass('disabled');
	}

	function shuffle(array) {
		var currentIndex = trivia.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
		}

		return array;
		}
	// generateQuestion();
	function generateQuestion () {
		if (gameStart === true){
			$('.message').empty();
			changeMusic();
			$('#question').text(trivia[questionNumber].question);
			$('#answerA').text(trivia[questionNumber].answers[0]);
			$('#answerB').text(trivia[questionNumber].answers[1]);
			$('#answerC').text(trivia[questionNumber].answers[2]);
			$('#answerD').text(trivia[questionNumber].answers[3]);
			currentAnswer = trivia[questionNumber].correctAnswer;
			console.log("current answer is " + currentAnswer);
		}else {
			console.log("game is over");
		}
	}


	$("#answerA").on("click", function() {
		if (gameStart === false){
		console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 0 && buttonAIsOn === true){
			selectButton.play();
			buttonIsOn();
			questionNumber++;
			console.log('q # is ' + questionNumber);
			reset();
			calculateMoney();
			generateQuestion();
		} 	else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerA");
				console.log("gameStart is " + gameStart);
				console.log("current answer is " + currentAnswer);
				console.log("button a is on is " + buttonAIsOn);
			}
	});

	$("#answerB").on("click", function() {
		if (gameStart === false){
		console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 1 && buttonBIsOn === true){
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			reset();
			calculateMoney();
			generateQuestion();
		}else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerB");
		}
	});

	$("#answerC").on("click", function() {
		if (gameStart === false){
		console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 2 && buttonCIsOn === true){
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			calculateMoney();
			generateQuestion();
			reset();
		} 	else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerC");
			}
	});

	$("#answerD").on("click", function() {
		if (gameStart === false){
			console.log("nothing")
		}
		else if (gameStart === true && currentAnswer === 3 && buttonDIsOn === true){
			questionNumber++;
			console.log('q # is ' + questionNumber);
			buttonIsOn();
			selectButton.play();
			calculateMoney();
			generateQuestion();
			reset();
		} 	else {
				wrongButton.play();
				gameLose();
				console.log("game loss from answerD");
			}
	});

	//These are the three lifeline buttons
	//5050, call a friend, and audience

	$("#5050").on("click", function() {
		if (fiftyFiftyOn === true){
			console.log('button 5050 was pressed');
			selectButton.play();
			fiftyFiftyOn = false;
			lifelineSwitch();
			//play sound
			//display 5050 screen
			if (currentAnswer === 0) {
				buttonDIsOn = false;
				$('#answerD').addClass('disabled');
				$('#answerB').addClass('disabled');
				buttonBIsOn = false;
				// disable button b and d
			}else if (currentAnswer === 1){
				buttonAIsOn = false;
				$('#answerA').addClass('disabled');
				$('#answerC').addClass('disabled');
				buttonCIsOn = false;
				//disable button a and c
			}else if (currentAnswer === 2){
				//disable a and b
				buttonAIsOn = false;
				$('#answerA').addClass('disabled');
				buttonBIsOn = false;
				$('#answerB').addClass('disabled');
			}else{
				//disable b & c
				buttonBIsOn = false;
				$('#answerB').addClass('disabled');
				buttonCIsOn = false;
				$('#answerC').addClass('disabled');
			}
		}else{
			console.log("5050 button doesn't work");
		}
	});

	function randomPhoneAnswerGenerator(){
		var randomphoneAnswer = phoneAnswers[Math.floor(Math.random() * phoneAnswers.length)];
		$('.message').text(randomphoneAnswer + lettersKey[currentAnswer]);
		}

	function phoneAFriend(){
		phoneRing.play();
		setTimeout(randomPhoneAnswerGenerator, 2000);
	}

	function audienceForHelp(){
		// var randomAudienceAnswer = audienceAnswers[Math.floor(Math.random() * audienceAnswers.length)];
		$('.message').text(audienceAnswers[currentAnswer]);

	}

	$("#friend").on("click", function() {
		if (phoneFriend === true){
			console.log('button friend was pressed');
			reset();
			phoneFriend = false;
			lifelineSwitch();
			selectButton.play();
			phoneAFriend();
		}else{
			console.log("friend button doesn't work");
		}
	});


	$("#audience").on("click", function() {
		if (audienceHelp === true){
			console.log('button audience was pressed');
			selectButton.play();
			audienceHelp = false;
			lifelineSwitch();
			audienceForHelp();
		}else{
			console.log("audience button doesn't work");
		}

	});

	function lifelineSwitch(){
		if (fiftyFiftyOn === false){
			$('#5050').addClass('disabled');
		}else{
			$('#5050').removeClass('disabled');
		}
			if (phoneFriend === false){
			$('#friend').addClass('disabled');
		}else{
			$('#friend').removeClass('disabled');
		}
			if (audienceHelp === false){
			$('#audience').addClass('disabled');
		}else{
			$('#audience').removeClass('disabled');
		}
	}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




});
