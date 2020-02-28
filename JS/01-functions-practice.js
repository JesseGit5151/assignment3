// function halfNumber(num) {
//     let sum = num / 2;
//     console.log('Half of ' + num + " is " + sum)
//     return sum;
// }
// halfNumber(55);

// function squareNumber(num) {
//     let sqrd = Math.pow(num, 2);
//     console.log('The result of squaring the number ' + num + ' is ' + sqrd)
//     return sqrd;
// }
// squareNumber(11);

// function percentOf(num1, num2) {
//     let percentage = num1 / num2 * 100;
//     console.log(num1 + ' is ' + percentage.toFixed(0) + '%' + ' of ' + num2)
// }
// percentOf(3, 47);

// function findModulus(num1, num2) {
//     let mod = num1 % num2;
//     console.log(mod + ' is the modulus of ' + num1 + ' & ' + num2);
//     return mod;
// }
// findModulus(10, 4);

//Will need three prompts
let sum;
function sumAll(a, b, c) {
    a = parseInt(prompt('Please Enter a number.'));
    b = parseInt(prompt('Please Enter a second number.'));
    c = parseInt(prompt('Please Enter a third number.'));
    sum = a + b + c;
    console.log(sum);
    
}
sumAll();