let dispNum;

function fn0(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 0 ;
}
function fn1(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 1 ;
}
function fn2(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 2 ;
}
function fn3(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 3 ;
}
function fn4(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 4 ;
}
function fn5(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 5 ;
}
function fn6(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 6 ;
}
function fn7(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 7 ;
}
function fn8(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 8 ;
}
function fn9(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + 9 ;
}
function fnPoint(){
    dispNum = document.getElementById('display').innerHTML;
    dispNum = document.getElementById('display').innerHTML = dispNum + "." ;
}


function fnER(){
    dispNum = document.getElementById('display').innerHTML;
    if ( dispNum.length == 1 ){
        document.getElementById('display').innerHTML = "0"
    } else{
        dispNum = document.getElementById('display').innerHTML.slice(0,-1);
        document.getElementById('display').innerHTML = dispNum;
    }
}

let op;
let firstNum;

function fnAD(){
    op = "AD";
    firstNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
}
function fnSB(){
    op = "SB";
    firstNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
}
function fnML(){
    op = "ML";
    firstNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
}
function fnDV(){
    op = "DV";
    firstNum = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = 0;
}


function fnEQ(){
    let ans;
    if ( op == "AD" ){
        ans = parseFloat(firstNum) + parseFloat(dispNum) ;
    } else if ( op == "SB" ){
        ans = parseFloat(firstNum) - parseFloat(dispNum) ;
    } else if ( op == "ML" ){
        ans = parseFloat(firstNum) * parseFloat(dispNum) ;
    } else if ( op == "DV" ){
        ans = parseFloat(firstNum) / parseFloat(dispNum) ;
    } else {
        ans = "invalid answer";
    }
    document.getElementById('display').innerHTML = ans ;
}

function fnAC(){
    document.getElementById('display').innerHTML = 0 ;
    op = 0 ;
    dispNum = 0 ;
    firstNum = 0 ;
}