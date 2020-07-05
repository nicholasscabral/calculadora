function insert(num) {
    // insert a number into the display
    display.value +=  num

    console.log("valor adicionado: " + num)
}

function clean() {
    //clear the display value 
    display.value = "";
}

function equal() {
    var exp = display.value
    var flag = false //boolean variable to check condicionals 

    display.value = console.error
    // if there is a syntax error, show in the display
    if(display.value == console.error) {
        display.value = "Syntax Error"
    }

    for(i = 0; i < exp.length; i++) {
        
        while(isNaN(exp[i])) {
            if(exp[i] == "*" || exp[i] == "/") {
                flag = true; //if there is at least one math operation before any number, flag = true
                display.value = "Syntax Error" 
                break
            }
        }
        break
    }    

    if(flag == false) { //if there is no  errors, calculate the expression normaly
        display.value = eval(exp)
    }
   
    
}

function back() {
    
    display.value = display.value.substring(0,display.value.length-1)

}
//selecting all tue buttons
const buttons = document.querySelectorAll('.button')
//selecting display
const display = document.querySelector('.display')
//adding event listener for each button in "buttons"
buttons.forEach( (button) => {
    button.addEventListener('click', calculate)
})

function calculate(event) {
    var buttonValue = event.target.value

    if (!isNaN(buttonValue) || buttonValue == "+" || buttonValue == "-" || buttonValue == "x" || buttonValue == "/" || buttonValue == ".") {
        if(buttonValue == "x") {
            buttonValue = "*" //changing the "x" into "*" to calculate normally
        }

        //if the value is a number, insert that number 
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



