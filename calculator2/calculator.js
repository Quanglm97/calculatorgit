const operators = require('./Operator/operators');

class calculator {
    constructor(){
       this.operators = {
           '+' : new operators.Add,
           '-' : new operators.Sub,
           '*' : new operators.Mul,
           '/' : new operators.Div       
         };
    }
    do(operator, numberA, numberB ){
        if(!this.operators.hasOwnProperty(operator)){
            throw new Error('Not Supported')
        }else {
            return this.operators[operator].operate(numberA, numberB)
        }
    }
}
module.exports = calculator;

