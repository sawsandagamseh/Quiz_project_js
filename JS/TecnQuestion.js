var numcount = 0;
var questions;
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
                window.location.href = '../Pages/index.html';
            }
        }
        if (minute < 1) {
            timer.style.border = '1px solid red';
            timer.style.backgroundColor = 'red';

        }
    }, 1000);
}
const http = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function () {
    const storedanswer = sessionStorage.getItem('indexTec');
    loadQuestion(storedanswer);
});
function loadQuestion(index) {
    http.open("GET", "../JSON.json");
    http.onload = function () {
        questions = JSON.parse(this.responseText);
        var divcontainer = document.getElementsByClassName("container")[0];
        var question = `<h2 class="qustiontext">${questions[index].id - 10}- ${questions[index].Q
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
loadQuestion(10);
var AnswersTecn = JSON.parse(localStorage.getItem('answersTechnicall')) || [];
function ClickBtnChoice(choice, clickedElement) {
    var choices = document.getElementsByClassName('Choices');
    for (let i = 0; i < choices.length; i++) {
        choices[i].style.border = '3px solid white';
    }
    for (let i = 0; i < AnswersTecn.length; i++) {
        if (AnswersTecn[i] == questions[index].awr1 || AnswersTecn[i] == questions[index].awr2 || AnswersTecn[i] == questions[index].awr3) {
            AnswersTecn.pop();
        }
    }
    if (index >= 10 && index < 19) {
        if (choice == '0') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersTecn.push(questions[index].awr1)
        }
        else if (choice == '1') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersTecn.push(questions[index].awr2)
        }
        else if (choice == '2') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersTecn.push(questions[index].awr3)
        }
        next.style.display = "inline";
        next.innerHTML = "next";

    }

    if (index == 19) {
        if (choice == '0') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersTecn.push(questions[index].awr1)
            next.style.display = "inline";
            next.innerHTML = "Finish";
        }
        if (choice == '1') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersTecn.push(questions[index].awr2)
            next.style.display = "inline";
            next.innerHTML = "Finish";
        }
        if (choice == '2') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersTecn.push(questions[index].awr3)
            next.style.display = "inline";
            next.innerHTML = "Finish";
        }
    }
}

var temp = sessionStorage.getItem('indexTec') ? parseInt(sessionStorage.getItem('indexTec')) : 10;
var index = temp;
function nextqus() {
    ++index;
    ++temp;
    sessionStorage.setItem("indexTec", temp);
    if (next.innerHTML == 'Finish') {
        grade();
    }
    loadQuestion(index);
    localStorage.setItem('answersTechnicall', JSON.stringify(AnswersTecn));
}
var counteng = 0;
var countTec = 0;
var countIQ = 0;

function grade() {
    const http = new XMLHttpRequest();
    http.open("GET", "../JSON.json");
    http.onload = function () {
        var grades = JSON.parse(this.responseText);
        var arrgradeeng = JSON.parse(localStorage.getItem('answers'));

        var arrgradeIQ = JSON.parse(localStorage.getItem('answersIQ'));
        for (let i = 0; i < grades.length; i++) {
            for (let j = 0; j < arrgradeeng.length; j++) {
                if (grades[i].true == arrgradeeng[j]) {
                    counteng++;
                    console.log(counteng)
                }
            }
            for (let j = 0; j < arrgradeIQ.length; j++) {
                if (grades[i].true == arrgradeIQ[j]) {
                    countIQ++;
                    console.log(countIQ)
                }
            }
            var arrgradetec = JSON.parse(localStorage.getItem('answersTechnicall'));
            for (let j = 0; j < arrgradetec.length; j++) {
                if (grades[i].true == arrgradetec[j]) {
                    countTec++;
                    console.log(countTec)
                }
            }
        }; var Totalcount = countIQ + countTec + counteng;
        JSON.stringify(localStorage.setItem('result grade', Totalcount))
        var result = JSON.parse(localStorage.getItem('result grade'))
        if (result >= 10) {
            window.location.href = '../pages/Congratulation.html'
            console.log('congrats')
        }
        else { window.location.href = '../pages/faild.html' }
    }
    http.send();

}
