const storedJsonString1 = JSON.parse(localStorage.getItem("answers"));
const storedJsonString2 = JSON.parse(localStorage.getItem("answersIQ"));
const storedJsonString3 = JSON.parse(localStorage.getItem("answersTechnicall"));

const myArray = [];

myArray.push(...storedJsonString1);
myArray.push(...storedJsonString2);
myArray.push(...storedJsonString3);

console.log(myArray);
const x = new XMLHttpRequest();
x.open("GET", "../JSON.json");
x.onload = function () {
    const myobj = JSON.parse(this.responseText);
    console.log(myobj);

    const contanier = document.getElementById("contanier");
    let counter = 0;
    for (let i = 0; i < myobj.length; i++) {


        let newArray = myArray.map(function (ele) {
            return ele === myobj[i].true ? counter++ : counter
        })

        let yourResult = document.getElementById("yourResult")
        yourResult.innerHTML = `Your result ${counter}/20`



        let card1 = document.createElement("div");
        card1.classList.add("card1")
        contanier.appendChild(card1)
        let h = document.createElement("h2");
        h.classList.add("test");
        if (i === 0) {
            h.innerHTML = "English test";
            card1.appendChild(h);
        } else if (i === 5) {
            h.innerHTML = "IQ test";
            card1.appendChild(h);
        } else if (i === 10) {
            h.innerHTML = "Technical test";
            card1.appendChild(h);
        }

        let card = document.createElement("div");
        card.classList.add("card", "my-4", "custom");
        contanier.appendChild(card);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "custom1");
        card.appendChild(cardBody);

        let Q = document.createElement("p");
        Q.innerHTML = `${i + 1} - ${myobj[i].Q}`;
        cardBody.appendChild(Q);




        let score0 = document.createTextNode(`Your Score (0/1)`);
        let score1 = document.createTextNode(`Your Score (1/1)`);
        let span1 = document.createElement("span");
        span1.classList.add("score");
        Q.appendChild(span1);

        if (myArray[i] == myobj[i].true) {
            span1.appendChild(score1);
        } else {
            span1.appendChild(score0);
        }


        let ol = document.createElement("ol");
        cardBody.appendChild(ol);

        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        ol.appendChild(li1);
        ol.appendChild(li2);
        ol.appendChild(li3);
        li1.innerHTML = `<span>A</span> ${myobj[i].awr1}`;
        li2.innerHTML = `<span>B</span> ${myobj[i].awr2}`;
        li3.innerHTML = `<span>C</span> ${myobj[i].awr3}`;



        if (myobj[i].awr1 == myobj[i].true) {
            li1.classList.add("correct1")
        } else { li1.classList.add("uncorrect") }


        if (myobj[i].awr2 == myobj[i].true) {
            li2.classList.add("correct1")
        } else { li2.classList.add("uncorrect") }

        if (myobj[i].awr3 == myobj[i].true) {
            li3.classList.add("correct1")
        } else { li3.classList.add("uncorrect") }


        let answer = document.createTextNode("Your Answer");
        let span = document.createElement("span");
        span.classList.add("answer");
        span.appendChild(answer);

        if (myArray[i] == myobj[i].awr1) {
            li1.appendChild(span)
        } else if (myArray[i] == myobj[i].awr2) {
            li2.appendChild(span)
        } else if (myArray[i] == myobj[i].awr3) {
            li3.appendChild(span)
        }


    };
}



function returnH() {
    window.location.href = "../pages/index.html";
}
x.send();
