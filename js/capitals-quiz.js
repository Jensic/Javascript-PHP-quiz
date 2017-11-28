"use strict";
(function() {
// An array whith objects, these objects stores all quizdata
var questions = [{
    question: "Azerbajdzjan",
    choices: ["Agsu", "Baku", "Lankaran", "Quba"],
    userAnswer: null,
    correctAnswer: "a2",
    image: ["images/azerbadjan1.jpg", "images/tilde3.jpg"]
}, {
    question: "Moldavien",
    choices: ["Chisinau", "Tiraspol", "Balti", "Tighina"],
    userAnswer: null,
    correctAnswer: "a1",
    image: ["images/moldavia1.jpeg", "images/ulrika2.jpg"]
}, {
    question: "Tajikistan",
    choices: ["Kulob", "Khujand", "Dushanbe", "Istaravshan"],
    userAnswer: null,
    correctAnswer: "a3",
    image: ["images/tajikistan1.jpg"]
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
	alert('Testa en av de andra quizen!');
}

})();