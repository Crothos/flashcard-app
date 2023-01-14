

// Letters Arrays
var alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numbers Arrays
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",];


// Getting random number from Array

const number2 = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",];

const random = Math.floor(Math.random() * number.length);


// WordsAPI Fetch Request, Returns Random Word/Definition and Console Logs it
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9c87cf3d42msh23dac74cec4328bp1b4dbdjsnc47d2a2101c4',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (event) {
	event.preventDefault();
	var errorMessage = document.getElementById("error-message")
	errorMessage.innerHTML = "";
	// removeMessage();
	
	
	var userTitle = document.getElementById("title").value;
	var userQuestionOne = document.getElementById("question-one").children[0].value;
	var userAnswerOne = document.getElementById("question-one").children[1].value;
	var userQuestionTwo = document.getElementById("question-two").children[0].value;
	var userAnswerTwo = document.getElementById("question-two").children[1].value;
	var userQuestionThree = document.getElementById("question-three").children[0].value;
	var userAnswerThree = document.getElementById("question-three").children[1].value;
	var userQuestionFour = document.getElementById("question-four").children[0].value;
	var userAnswerFour = document.getElementById("question-four").children[1].value;
	var userQuestionFive = document.getElementById("question-five").children[0].value;
	var userAnswerFive = document.getElementById("question-five").children[1].value;
	// var cardItems = { 
	//  question: question, 
	//  answer: answer 
	// } 
	console.log("Title: " + userTitle);
	console.log("Question 1: " + userQuestionOne);
	console.log("Answer 1: " + userAnswerOne)

	var cardBank = {
		question1: userQuestionOne,
		answer1: userAnswerOne,
		question2: userQuestionTwo,
		answer2: userAnswerTwo,
		question3: userQuestionThree,
		answer3: userAnswerThree,
		question4: userQuestionFour,
		answer4: userAnswerFour,
		question5: userQuestionFive,
		answer5: userAnswerFive,
	}
	console.log(cardBank);
	if (userTitle === "") {
		// var titleMessage = document.createElement("p");
		// titleMessage.setAttribute("style", "color: red; font-size: 30px");
		// var customLabel = document.getElementById("custom-label");
		// titleMessage.innerHTML = ("Please include a title!");
		// customLabel.append(titleMessage);
		errorMessage.innerHTML = "Please include a title!";
	} else if (userQuestionOne === ""
		|| userAnswerOne === ""
		|| userQuestionTwo === ""
		|| userAnswerTwo === ""
		|| userQuestionThree === ""
		|| userAnswerThree === ""
		|| userQuestionFour === ""
		|| userAnswerFour === ""
		|| userQuestionFive === ""
		|| userAnswerFive === "") {
		// var fillMessage = document.createElement("p");
		// var customLabel = document.getElementById("custom-label");
		// fillMessage.setAttribute("style", "color: red; font-size: 30px");
		// fillMessage.innerHTML = ("Please fill out every blank!");
		// customLabel.append(fillMessage);
		
		errorMessage.innerHTML= "Please fill out every blank!";
		
	}
	// console.log(customLabel.childNodes[1].innerHTML);
	// function removeMessage () {
	// 	fillMessage.innerHTML = ("");
	// 	titleMessage.innerHTML = ("");
	// }
	
	
});

console.log