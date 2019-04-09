
var add = class Add {
    operate(numberA, numberB) {
        return parseInt(numberA) + parseInt(numberB);
    }
}

var sub = class Sub {
    operate(numberA, numberB){
        return numberA - numberB
    }
}
var mul = class Mul{
    operate(numberA, numberB){
        return numberA * numberB
    }
} 
var div = class Div {
    operate(numberA, numberB){
        if (numberB == 0){
        throw "Division by"
        }else 
        return numberA / numberB
    }
}
exports.add = add;
exports.sub = sub;
exports.div = div;
exports.mul = mul;
