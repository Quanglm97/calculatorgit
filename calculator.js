/*class Sum {

     sum(a, b) {
         return a+b ;
    }
}*/

    

/*

class calcuator {

    funtion() {
        let s =new Sum();
        s.sum(4, 7)

    }
}*/
function sum (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function mul (a, b) {
    return a * b;
}

function div(a, b) {
    if (y == 0) {
        console.log("Error");
    } else
        return a / b;
}

var operations = {
    '+': sum,
    '-': sub,
    '*': mul,
    '/': div
}

var calculate = function(a, b, operation){
    return operations[operation](a, b);
}

console.log(calculate(16,9, '*'));

