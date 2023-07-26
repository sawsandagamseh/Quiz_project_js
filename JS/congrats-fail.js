function showResult(){
    window.location.href='../pages/Result.html'
}
function final_result(){
    var final=document.getElementById('final_result');
    var result=localStorage.getItem('result grade');
    final.innerHTML=result+' / 20';
}
final_result()