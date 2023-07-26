
var questions;
const http = new XMLHttpRequest();
window.onload = function () {
    var minute = 4;
    var sec = 59;
    setInterval(function () {
        var timer = document.getElementsByClassName('timerdiv')[0];
        document.getElementById("timer").innerHTML = 'Timer: ' + minute + ":" + sec;
        sec--;

        if (sec == 0) {
            minute--;
            sec = 60;

            if (minute == 0) {
                window.location.href = '../Pages/NextIQ.html';
            }
        }
        if (minute < 1) {
            timer.style.border = '1px solid red';
            timer.style.backgroundColor = 'red';

        }
    }, 1000);

}

document.addEventListener("DOMContentLoaded", function () {
    const storedanswer = sessionStorage.getItem('index');
    loadQuestion(storedanswer);
});
function loadQuestion(index) {
    http.open("GET", "../JSON.json");
    http.onload = function () {
        questions = JSON.parse(this.responseText);
        var divcontainer = document.getElementsByClassName("container")[0];
        var question = `<h2 class="qustiontext">${questions[index].id}- ${questions[index].Q
            }</h2>
        <div onclick="ClickBtnChoice(0,this)" class="Choices"><span class="Letter"> A </span> <span class="Question">${questions[index].awr1
            }</span></div>
        <div onclick="ClickBtnChoice(1,this)" class="Choices"><span class="Letter"> B </span> <span class="Question">${questions[index].awr2
            }</span> </div>
        <div  onclick="ClickBtnChoice(2,this)" class="Choices"><span class="Letter"> C </span> <span class="Question">${questions[index].awr3
            }</span> </div>
        `;
        divcontainer.innerHTML = question;
        next.innerHTML = "";
        next.style.display = "none";
    };
    http.send();
}
var next = document.getElementsByClassName("nextbtn")[0];
loadQuestion(0);
var grade = 0;
var gradewrong = 0;
var Answers = JSON.parse(localStorage.getItem('answers')) || [];
function ClickBtnChoice(choice, clickedElement) {
    var choices = document.getElementsByClassName('Choices');
    for (let i = 0; i < choices.length; i++) {
        choices[i].style.border = '3px solid white';
    }
    for (let i = 0; i < Answers.length; i++) {
    if (Answers[i] == questions[index].awr1 || Answers[i] == questions[index].awr2 || Answers[i] == questions[index].awr3) {
        Answers.pop();}
    }
    if (index < 4) {
        if (choice == '0') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            Answers.push(questions[index].awr1)
        }
        else if (choice == '1') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';

            Answers.push(questions[index].awr2)

        }
        else if (choice == '2') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            Answers.push(questions[index].awr3)

        }
        console.log(grade);
        next.style.display = "inline";
        next.innerHTML = "next";

    }

    if (index == 4) {
        if (choice == '0') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            Answers.push(questions[index].awr1)
            next.style.display = "inline";
            next.innerHTML = "submit";
            localStorage.setItem('answers', JSON.stringify(Answers));
        }
        if (choice == '1') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            Answers.push(questions[index].awr2)

            next.style.display = "inline";
            next.innerHTML = "submit";
        }
        if (choice == '2') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            Answers.push(questions[index].awr3)
            next.style.display = "inline";
            next.innerHTML = "submit";
        }
    }
}
var temp = sessionStorage.getItem('index') ? parseInt(sessionStorage.getItem('index')) : 0;
var index = temp;
function nextqus() {

    ++index;
    ++temp;
    sessionStorage.setItem("index", temp);
    if (next.innerHTML == 'submit') {
        window.location.href = '../Pages/NextIQ.html';
    }
    loadQuestion(index);
    localStorage.setItem('answers', JSON.stringify(Answers));
}
var countIQ = 1;
function gradIQ() {
    const http = new XMLHttpRequest();

    http.open("GET", "./JSON.json");
    http.onload = function () {
        var grades = JSON.parse(this.responseText);
        var arrgrade = JSON.parse(localStorage.getItem('answersIQ'));
        console.log(arrgrade)
        for (let i = 0; i < grades.length; i++) {
            for (let j = 0; j < arrgrade.length; j++) {
                if (grades[i].true == arrgrade[j]) {
                    console.log(countIQ++);
                    countIQ++;
                }
            }
        }
    };
    http.send();
}

