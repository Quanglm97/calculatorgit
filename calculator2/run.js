const calculator = require('./calculator');
let cal = new calculator();
try {
console.log(cal.do(process.argv[2], process.argv[3], process.argv[4]));
} catch (erro) {
    console.log(erro);
}