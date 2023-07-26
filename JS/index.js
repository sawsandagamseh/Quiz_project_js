function checkin() {
    var result = localStorage.getItem('result grade');
    var arrayeng = localStorage.getItem('answers');
    var arrayIQ = localStorage.getItem('answersIQ');
    var arrayTec = localStorage.getItem('answersTechnicall');
    var name = localStorage.getItem('name');
    if(name!=null){
    if (result == undefined) {
        window.location.href = '../pages/NextEng.html'
    }
    if (result != undefined) {
        window.location.href = '../pages/Result.html'
    }
    if (arrayeng.length > 1) {
        window.location.href = '../pages/NextIQ.html'
    }
    if (arrayIQ.length > 1) {
        window.location.href = '../pages/NextTec.html'
    }
    if (arrayTec.length > 1) {
        window.location.href = '../pages/Result.html'
    }}
    else{
        window.location.href='../pages/regestration.html'
        console.log('.................')
    }


}


var log = document.getElementById('login')
function login() {
    var name = localStorage.getItem('name');
    if (name!=null) {
        log.innerHTML = 'Log out';
        log.href='../pages/login.html'

    }

}
window.onload=login
var nameid=document.getElementsByClassName('name')[0]
function checklogged(){
    var name = localStorage.getItem('name')
    if(name!=null){document.getElementsByClassName('name')[0].innerHTML = name;}
}
checklogged()
function tologin() {
    window.location.href='../pages/login.html'
}
function toSign(){
    window.location.href='../pages/regestration.html' 
}