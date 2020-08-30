var currentQuestion = 0;
var score = 0;

var highscores = [];

$(document).ready(function (){
    $("#questionHeader").text(questions[currentQuestion].q)
});


// questions

var questions = [{
    q: "Who is the manager of Los Pollos Hermanos?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 3
},{
    q: "How did Walter execute his first killing?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 3
},{
    q: "What color was the meth after the chemical switch made by Walter?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 2
},{
    q: "Who destracts Gus to finally kill him?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 2
},{
    q: "What is the name of the ?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 3
},
{
    q: "What is the name of the ?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 1
},{
    q: "What is the name of the ?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 0
},{
    q: "What is the name of the ?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 1
},{
    q: "What is the name of the ?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 0
},{
    q: "What is the name of the ?",
    a: [
        "A: <h1>",
        "B: <h3>",
        "C: <h4>",
        "D: <h6>"
    ],
    c: 0
}];

console.log(questions);


// check answers / next question

function nextQuestion(answer){
    if (answer == questions[currentQuestion].c) {
        score++;
    }
    console.log('User Answer: ' + answer);
    console.log('Correct Answer: ' + questions[currentQuestion].c);
    console.log('Score: ' + score);
    currentQuestion++;
    if (currentQuestion < questions.length){
        $("#questionHeader").text(questions[currentQuestion].q);
    } 
    else { 
        console.log("hit");
        window.location.href="finish.html";
    }

}

//save score

function saveScore() {
    var userInitials = $("#initials").val();
    highscores.push(userInitials);
    window.location.href="highscores.html";
}


