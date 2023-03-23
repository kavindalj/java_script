let firNum;
let secNum;
let fAnswer;

function getvalues (){
    firNum = parseFloat(document.getElementById("fNum").value);
    secNum = parseFloat(document.getElementById("sNum").value);
}
function sendvalue(){
    document.getElementById('ans').innerHTML='answer = ' + fAnswer;
}

function plus () {
    getvalues();
    fAnswer = firNum + secNum;
    sendvalue();
}
function minus () {
    getvalues();
    fAnswer = firNum - secNum;
    sendvalue();
}
function multiple () {
    getvalues();
    fAnswer = firNum * secNum;
    sendvalue();
}
function division () {
    getvalues();
    fAnswer = firNum / secNum;
    sendvalue();
}