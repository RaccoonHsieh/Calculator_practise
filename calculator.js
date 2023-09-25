// 宣告每個數字按鈕
let onebtn = document.getElementById('calc-one');
let twobtn = document.getElementById('calc-two');
let threebtn = document.getElementById('calc-three');
let fourbtn = document.getElementById('calc-four');
let fivebtn = document.getElementById('calc-five');
let sixbtn = document.getElementById('calc-six');
let sevenbtn = document.getElementById('calc-seven');
let eightbtn = document.getElementById('calc-eight');
let ninebtn = document.getElementById('calc-nine');
let zerobtn = document.getElementById('calc-zero');

// 宣告符號
let dividebtn = document.getElementById('calc-divide');
let mulbtn = document.getElementById('calc-multiply');
let plusbtn = document.getElementById('calc-plus');
let minusbtn = document.getElementById('calc-minus');
let clearbtn = document.getElementById('calc-clear');
let backspacebtn = document.getElementById('calc-backspace');
let decimalbtn = document.getElementById('calc-decimal');
let equalsbtn = document.getElementById('calc-equals');

let displayValElement = document.getElementById('calc-display-val');

let calcNumBtns = document.getElementsByClassName('calc-btn-number');
let operatorbtns = document.getElementsByClassName('calc-btn-operator'); 

let displayVal = ''; //顯示的數字預設為0
let evalStrArray = []; //存放每一次點擊的數字
let pendingVal;

//click事件，接到值，讓進去html，讓點選的數字可以一直串接在一起
function updateDisplayValue(clickobj){
    let btnText = clickobj.target.innerText;

    //判斷第一個點擊的是0的話要取代掉
    if( displayVal === '0' ){
        displayVal = '';
    }
    displayVal += btnText;
    displayValElement.innerText = displayVal;
};

//+-x/
function operatorValue(clickobj){
    let operatorBtn = clickobj.target.innerText;
    switch (operatorBtn) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStrArray.push(pendingVal);
            evalStrArray.push('+');
        break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStrArray.push(pendingVal);
            evalStrArray.push('-');
        break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStrArray.push(pendingVal);
            evalStrArray.push('*');
        break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStrArray.push(pendingVal);
            evalStrArray.push('/');
        break;
        case '=':
            evalStrArray.push(displayVal);
            let total = eval(evalStrArray.join(''));
            displayVal = total;
            displayValElement.innerText = displayVal;
            evalStrArray = [];
        break;
    
        default:
            break;
    };
};

//用for迴圈跑出我現在點選的btn
for(let i = 0; i < calcNumBtns.length; i++ ){
    calcNumBtns[i].addEventListener('click', updateDisplayValue);
};

for(let j = 0; j < operatorbtns.length; j++){
    operatorbtns[j].addEventListener('click', operatorValue);
};

//ACbtn 清空所有內容
clearbtn.addEventListener('click', () => {
    displayVal = '0';
    displayValElement.innerText = displayVal;
});

//倒退功能
backspacebtn.addEventListener('click', () => {
    let a = displayVal.length;
    let b  = displayVal.slice(0, a - 1);
    displayVal = b;

    if( displayVal === ''){
        displayVal = '0';
    };
    displayValElement.innerText = displayVal;
});

//小數點功能
decimalbtn.addEventListener('click', () => {
    if( !displayVal.includes('.') ){
        if( displayVal === '' ){
            displayVal = '0' + '.';
            displayValElement.innerText = displayVal;
        }else{
            displayVal += '.';
            displayValElement.innerText = displayVal;
        }
    }
});