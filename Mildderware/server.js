const Koa = require('koa');

const app = new Koa();

const numberFilterMiddleware = async (context, next) =>{
    const numberA = parseInt(context.query.op);
    const numberB = parseInt(context.query.op);
    const op      = (context.query.op);
if (numberA, numberB, op) {
    return await next();
    }
        context.body = {
            message : 'Error'
           
    }
};
const calculator  = async (context, next) =>{
    const numberA = parseInt(context.query.op);
    const numberB = parseInt(context.query.op);
    const op      = (context.query.op);
    
    var run = require('./Operator.js')
    var operators = {
        "add" :(new run.add),
        "sub" :(new run.sub),
        "mul" :(new run.mul),
        "div" :(new run.div)
    };
    context.body = {
        result: operators[op].operate(numberA, numberB),
        message: context.query.op
    }
}

app.use(numberFilterMiddleware);
app.use(calculator);

app.listen(3000);