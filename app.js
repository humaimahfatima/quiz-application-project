var questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "How many days are there in a week?",
        options: ["Five", "Six", "Seven", "Eight"],
        answer: "Seven"
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Horse"],
        answer: "Lion"
    },
    {
        question: "What is the capital of Pakistan?",
        options: ["Lahore", "Karachi", "Islamabad", "Quetta"],
        answer: "Islamabad"
    },
    {
        question: "Which star gives us light during the day?",
        options: ["Moon", "Sun", "Sirius", "Polaris"],
        answer: "Sun"
    },
    {
        question: "How many months are there in a year?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "Which is the largest ocean?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    },
    {
        question: "Which part of a plant absorbs water?",
        options: ["Flower", "Leaves", "Roots", "Fruit"],
        answer: "Roots"
    }
];

var currentQuestion = 0;
var score = 0;
var answered = false;

function startQuiz() {
    document.getElementById("home").style.display = "none";
    document.getElementById("result-page").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    currentQuestion = 0;
    score = 0;

    showQuestion();
}

function showQuestion() {
    answered = false;

    document.getElementById("message").innerHTML = "";
    document.getElementById("next-btn").disabled = true;

    document.getElementById("question-number").innerHTML =
        "Question " + (currentQuestion + 1) + " / " + questions.length;

    document.getElementById("score").innerHTML = "Score: " + score;

    document.getElementById("progress-bar").style.width =
        (currentQuestion / questions.length * 100) + "%";

    document.getElementById("question").innerHTML =
        questions[currentQuestion].question;

    var optionsHTML = "";

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        optionsHTML += '<button class="option-btn" onclick="checkAnswer(this)">' +
            questions[currentQuestion].options[i] + '</button>';
    }

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(button) {
    if (answered) {
        return;
    }

    answered = true;

    var answer = questions[currentQuestion].answer;
    var buttons = document.getElementsByClassName("option-btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;

        if (buttons[i].innerHTML === answer) {
            buttons[i].classList.add("correct");
        }
    }

    if (button.innerHTML === answer) {
        score++;
        document.getElementById("message").innerHTML = "Correct! 🌿";
    } else {
        document.getElementById("message").innerHTML =
            "Not quite! The answer is " + answer;
        button.classList.add("wrong");
    }

    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result-page").style.display = "block";

    document.getElementById("progress-bar").style.width = "100%";

    document.getElementById("final-score").innerHTML =
        score + " / " + questions.length;

    if (score >= 6) {
        document.getElementById("final-message").innerHTML =
            "Lovely work! Keep learning. 🌷";
    } else {
        document.getElementById("final-message").innerHTML =
            "Good try! Practice makes progress. 🌱";
    }
}

document.getElementById("start-btn").onclick = startQuiz;
document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("restart-btn").onclick = startQuiz;