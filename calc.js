function insert(num) {
    //if there is syntax error, return the function
    if(SyntaxError) { 
        return
    }
    
    // insert a number into the display
    if(display.value.length < 20) {
      
        if(isNaN(num)) {
            display.value += num
        }
        else if(display.value.length == 1 && display.value[0] == 0) {
            display.value = num
        }
        else {
            display.value += num
        }
    }
    else {
        return
    }
}

function clean() {
    //if there is a syntax error, toggle the variable to false (reset)
    SyntaxError = false
    //clear the display value 
    display.value = "0";

}

function equal() {
    var exp = display.value
    var flag = false //boolean variable to check condicionals 

    var error = console.error
    // if there is a syntax error, show in the display
    if(error) {
        display.value = "Syntax Error"
        SyntaxError = true
    }

    for(i = 0; i < exp.length; i++) {
        
        if(isNaN(exp[i])) {
            if(exp[i] == "*" || exp[i] == "/") {
                flag = true; //if there is at least one math operation before any number, flag = true
                display.value = "Syntax Error" 
                SyntaxError = true
            }
        }
        break
    }    

    if(flag == false) { //if there is no  errors, calculate the expression normaly
        var answer = eval(exp)

        if(isFinite(answer)) {
            display.value = answer
        }
        else {
            display.value = "Math Error" // if is infinity 
            SyntaxError = true
        }
    }
   
    
}

function back() {
    //if there is syntax error, return the function
    if(SyntaxError) {
        return
    }

    display.value = display.value.substring(0,display.value.length-1)
    
    if(display.value == "") {
        display.value = "0"
    }

}

//selecting display
const display = document.querySelector('.display')
//selecting all numbers
const numbers = document.querySelectorAll('.number')
//adding event listener for each number in "numbers"
numbers.forEach( (button) => {
    button.addEventListener('click', calculate)
})
//selecting all operators
const operators = document.querySelectorAll('.operator')
//adding event listener for each operator in "operators"
operators.forEach( (button) => {
    button.addEventListener('click', calculate)
})

//boolean variable to check if there is syntax error
var SyntaxError = false

function calculate(event) {
    var buttonValue = event.target.value


    if (!isNaN(buttonValue) || (isNaN(buttonValue) && buttonValue != "=" && buttonValue != "<" && buttonValue != "c")) {
        if(buttonValue == "x") {
            buttonValue = "*" //changing the "x" into "*" to calculate normally
        }

        //insert the buttonValue 
        insert(buttonValue) 

    }
    else if (buttonValue == '=') {
        equal() //calling the equal() function
    }
    else if (buttonValue == "<") {
        back() //calling the back() function
    }
    else if (buttonValue == "c") {
        clean() //calling the clean() function
    }
    
}


