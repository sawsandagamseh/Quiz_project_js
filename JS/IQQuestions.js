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
                window.location.href = '../Pages/NextTec.html';
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
    const storedanswer = sessionStorage.getItem('indexIQ');
    loadQuestion(storedanswer);
    console.log(storedanswer);
});
function loadQuestion(index) {
    
    http.open("GET", "../JSON.json");
    http.onload = function () {
        questions = JSON.parse(this.responseText);
        var divcontainer = document.getElementsByClassName("container")[0];
        var question = `<h2 class="qustiontext">${questions[index].id-5}- ${questions[index].Q
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
loadQuestion(5);
var AnswersIQ = JSON.parse(localStorage.getItem('answersIQ')) || [];
function ClickBtnChoice(choice, clickedElement) {
    var choices = document.getElementsByClassName('Choices');
    for (let i = 0; i < choices.length; i++) {
        choices[i].style.border = '3px solid white';
    }
    for (let i = 0; i < AnswersIQ.length; i++) {
        if (AnswersIQ[i] == questions[index].awr2 ||AnswersIQ[i] == questions[index].awr3||AnswersIQ[i] == questions[index].awr1) {
            AnswersIQ.pop();
        }
    }
    if (index >=5&&index<9) {
        console.log(index)
        if (choice == '0') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersIQ.push(questions[index].awr1)
        }
        else if (choice == '1') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersIQ.push(questions[index].awr2)
        }
        else if (choice == '2') {
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';

            AnswersIQ.push(questions[index].awr3)
        }

        next.style.display = "inline";
        next.innerHTML = "next";

    }

    if (index ==9) {
        if(choice=='0'){
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersIQ.push(questions[index].awr1)
        next.style.display = "inline";
        next.innerHTML = "submit";
        }
        if(choice=='1'){
            clickedElement.style.border = '6px solid rgb(6, 211, 242)';
            AnswersIQ.push(questions[index].awr2)
            next.style.display = "inline";
            next.innerHTML = "submit";
            }
            if(choice=='2'){
                clickedElement.style.border = '6px solid rgb(6, 211, 242)';
                AnswersIQ.push(questions[index].awr3)  
                next.style.display = "inline";
                next.innerHTML = "submit";
                if (questions[index].awr3 == questions[index].true)
                    ++grade;
                    else{
                        ++gradewrong;
                    }
              
                }
    }
}
var temp = sessionStorage.getItem('indexIQ') ? parseInt(sessionStorage.getItem('indexIQ')) : 5;
var index=temp;
function nextqus() {
    ++index;
    ++temp;
    sessionStorage.setItem("indexIQ", temp);
    if (next.innerHTML == 'submit') {
        window.location.href = '../Pages/NextTec.html';
    }
    loadQuestion(index);
    localStorage.setItem('answersIQ', JSON.stringify(AnswersIQ));
}
