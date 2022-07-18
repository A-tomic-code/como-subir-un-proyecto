function subs(op1, op2 = 0) {
    return op1 - op2;
}

function mult(op1, op2 = 0) {
    return op1 * op2;
}

function div(op1, op2 = 0) {
    if(op2 != 0){
        return op1 / op2;
    }else{
        return 'No se puede dividir entre 0'
    }
}

function cuadrado (num){
    return num ** 2
}

module.exports = {sum, subs, mult, div};