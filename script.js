var currentQuestion = 0;
var score = 0;

// localStorage.setItem("highscores", []);


$(document).ready(function (){
    $("#questionHeader").text(questions[currentQuestion].q);
    $("#A").text(questions[currentQuestion].a[0]);
    $("#B").text(questions[currentQuestion].a[1]);
    $("#C").text(questions[currentQuestion].a[2]);
    $("#D").text(questions[currentQuestion].a[3]);
    loadHighscores();
});

var time = 100;
var timer = setInterval(function(){
    document.getElementById("timer").innerHTML = "Time left: " + time;
    time--;
    if (time == 0) {
        localStorage.setItem('score', score);
        window.location.href="finish.html";
    }
}, 1000);


var questions = [{
    q: "Who is the manager of Los Pollos Hermanos?",
    a: [
        "A: Paul",
        "B: Walter",
        "C: Skylar",
        "D: Gus"
    ],
    c: 3
},{
    q: "How did Walter execute his first killing?",
    a: [
        "A: Using a bomb",
        "B: Using a gun",
        "C: Using acid",
        "D: Using a bike lock"
    ],
    c: 3
},{
    q: "What color was the meth after the chemical switch made by Walter?",
    a: [
        "A: Green",
        "B: White",
        "C: Blue",
        "D: Pink"
    ],
    c: 2
},{
    q: "Who distracts Gus long enough to finally kill him?",
    a: [
        "A: Hank",
        "B: Jesse",
        "C: Hector",
        "D: Walter"
    ],
    c: 2
},{
    q: "What is the name of the car wash Walter worked at then owned?",
    a: [
        "A: Sonic Car Wash",
        "B: Express Wash",
        "C: Wash Depot",
        "D: A1A Car Wash"
    ],
    c: 3
},
{
    q: "Who cleaned up the apartment after Jane dies?",
    a: [
        "A: Jesse",
        "B: Mike",
        "C: Jane's Dad",
        "D: Walter"
    ],
    c: 1
},{
    q: "What did Walter use to blow up Tuco's office?",
    a: [
        "A: Fulminated Mercury",
        "B: TNT",
        "C: Ammonium chlorate",
        "D: Fulminating Gold"
    ],
    c: 0
},{
    q: "What did Walter use to melt a lock off a door?",
    a: [
        "A: Blow Torch",
        "B: Thermite",
        "C: Acid",
        "D: Lava"
    ],
    c: 1
},{
    q: "What was the name of Andrea's Kid (Jesse's Girlfirend)?",
    a: [
        "A: Brock",
        "B: Drew",
        "C: Steven",
        "D: Benjamin"
    ],
    c: 0
},{
    q: "What did Walter use to poison Brock?",
    a: [
        "A: Lily of the Valley",
        "B: Ricin",
        "C: Beans",
        "D: VX"
    ],
    c: 0
}];



// check answers / next question
function nextQuestion(answer){
    if (answer == questions[currentQuestion].c) {
        score++;
    }
    else{
        time -= 5;
    }
    console.log(score);
    currentQuestion++;
    if (currentQuestion < questions.length){
        $("#questionHeader").text(questions[currentQuestion].q);
        $("#A").text(questions[currentQuestion].a[0]);
        $("#B").text(questions[currentQuestion].a[1]);
        $("#C").text(questions[currentQuestion].a[2]);
        $("#D").text(questions[currentQuestion].a[3]);
    } 
    else {
        localStorage.setItem('score', score);
        window.location.href="finish.html";
    }
}

//save score
function saveScore() {
    var userInitials = $("#initials").val();
    score = localStorage.getItem('score')
    if (localStorage.getItem("highscores") === null){
        
        var highscores = [];
        highscores.push({
            user: userInitials,
            score: score
        });
        localStorage.setItem("highscores", JSON.stringify(highscores));
    }
    else {
        var highscores = JSON.parse(localStorage.getItem("highscores"));
        highscores.push({
            user: userInitials,
            score: score
        });
        localStorage.setItem("highscores", JSON.stringify(highscores));
        console.log(highscores);
    }
    var s = JSON.parse(localStorage.getItem("highscores"));
    console.log(s);
    window.location.href="highscores.html";
}

// sort function to sort by score for each user
function sortHighscores(a, b) {
    let comparison = 0;
    if (a.score > b.score) {
        comparison = -1;
    }
    else if (a.score < b.score) {
        comparison = 1;
    }
    return comparison;
}

//start over
function startOver() {
    window.location.href="index.html";
}

// load highscores table from local storage
function loadHighscores() {
    var scoresTable = document.getElementById("scores");
    if (scoresTable != null) {
        var scores = JSON.parse(localStorage.getItem("highscores"));
        scores = scores.sort(sortHighscores);
        for (var i = 0; i < scores.length; i++) {
            var user = scores[i].user;
            var score = scores[i].score;
            var li = document.createElement("li");
            li.textContent = user + ": " + score;
            li.className = "tableEntry";
            scoresTable.appendChild(li);
        }
    }
}
