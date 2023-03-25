

function checknumber (){
    let phoneNum = document.getElementById('pNum').value;
    let numLength = phoneNum.length;
    let firstNum = phoneNum.substr(0,1);
    let firstNums = phoneNum.substr(0,2);
    let finalNum;

    if (numLength == 9) {
        finalNum = '94' + phoneNum;
        document.getElementById('numDisplay').innerHTML = finalNum + " is valied number";
    }
    else if (numLength == 10 && firstNum == 0 ) {
        finalNum = '94' + phoneNum.substr(1,9);
        document.getElementById('numDisplay').innerHTML = finalNum + " is valied number";
    }
    else if (numLength == 11 && firstNums == 94){
        finalNum = phoneNum;
        document.getElementById('numDisplay').innerHTML = finalNum + " is valied number";
    }
    else{
        alert('number invalied');
    }
}

