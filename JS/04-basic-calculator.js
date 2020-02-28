let fstNum;
let scndNum;
let oper;

fstNum = parseInt(prompt('Please enter a number'));
scndNum = parseInt(prompt('Please enter a second number.'));
oper = prompt('Would you like to add, subtract, multiply, or divide?');

//Switch statement will replace if's below
function calculate() {
    
    
    while(oper !== 'add' && oper !== 'subtract' && oper !== 'multiply' && oper !== 'divide') {
        alert('Please enter a correct value');
        oper = prompt('please enter add, subtract, multiply, or divide');
    }

    switch(oper) {
        case 'add' : 
        alert(fstNum + scndNum);
        break;
        case 'subtract' : 
        alert(fstNum - scndNum);
        break;
        case 'multiply' : 
        alert(fstNum * scndNum);
        break;
        case 'divide' : 
        alert(fstNum / scndNum);
        break;
        default:
            console.log('error');
            break;
    }

}

calculate();
