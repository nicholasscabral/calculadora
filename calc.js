function insert(num) {
    document.form.display.value +=  num

    console.log("numero adicionado")
}

function clean() {
    document.form.display.value ="";
}

function equal() {
    var exp = document.form.display.value
    if(exp) {
        document.form.display.value = eval(exp)
        //eval executa um expressão dentro de uma string
    }
}

function back() {
    var exp = document.form.display.value 
    //pegando propriedades do objeto

    document.form.display.value = exp.substring(0,exp.length-1)
}



