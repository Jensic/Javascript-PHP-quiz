"use strict";
(function() {
// An array whith objects, these objects stores all quizdata
var questions = [{
    question: "Richard Sjöberg",
    choices: ["1976", "1972", "1968", "1969"],
    userAnswer: null,
    correctAnswer: "a4",
    image: ["images/richard1.jpg", "images/tilde3.jpg"]
}, {
    question: "Zatan Ibrahimovic",
    choices: ["1979", "1982", "1981", "1980"],
    userAnswer: null,
    correctAnswer: "a3",
    image: ["images/zlatan1.jpg", "images/ulrika2.jpg"]
}, {
    question: "Peter Jhide",
    choices: ["1978", "1974", "1966", "1971"],
    userAnswer: null,
    correctAnswer: "a4",
    image: ["images/peter1.jpg"]
}];
// sets up some variabels
var newimage = document.getElementById("image");
var currentQuestion = 0;
var score = 0;
var total = questions.length;
// a listener which runs initGame function
document.getElementById('start').addEventListener('click', initGame);

initGame();
// initGame() function which uses jQuery fadIn to display div with id gameboard which contains html structure for questions, runs nextQuestion function
function initGame() {
	$('#start').fadeOut();
	$('#gameboard').fadeIn();

	nextQuestion();
}
// This function fills the html structure with data from the objects mentioned earlier, takes in the quiz text,picture and questions
function nextQuestion() {

	document.getElementById('qtext').innerHTML = questions[currentQuestion].question;
    
    newimage.src = questions[currentQuestion].image[0];

	document.getElementById('a1').innerHTML = questions[currentQuestion].choices[0];
	document.getElementById('a2').innerHTML = questions[currentQuestion].choices[1];
	document.getElementById('a3').innerHTML = questions[currentQuestion].choices[2];
    document.getElementById('a4').innerHTML = questions[currentQuestion].choices[3];

	document.getElementById('a1').addEventListener('click', checkAnswer);
	document.getElementById('a2').addEventListener('click', checkAnswer);
	document.getElementById('a3').addEventListener('click', checkAnswer);
    document.getElementById('a4').addEventListener('click', checkAnswer);
}
// This function checks if the answer is correct, displays score and checks if the question line as reach its end
function checkAnswer(e) {

    var rightAnswer = questions[currentQuestion].correctAnswer;
    
    var userAnswer = e.target.id;
    // checks if answer is correct and add one to score variabel
    if (rightAnswer === userAnswer) {
       score++;
    }
    
    // Display result
    var result = document.getElementById('result');
    result.innerHTML = '<h3>You scored <span>'+score+'</span> out of '+total+'</h3>';
    // checks if another question is left, if not ends quiz
    if(currentQuestion + 1 < questions.length) {
		currentQuestion++;
		nextQuestion();
	} else {
		gameOver();
	}
}
// Just displays an alert when quiz is over
function gameOver() {
	alert('Testa nån av de andra quizen!');
}

})();