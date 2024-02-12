/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2
}

function addNumbers (addNumber1, addNumber2) {
    let addNumber1 = Number(document.querySelector('#add1').value)
    let addNumber2 = Number(document.querySelector('#add2').value)

    document.querySelector ('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector ('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const substract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function (subsNumber1, subsNumber2) {
    let substractNumber1 = Number(document.querySelector("#subtract1").value)
    let substractNumber2 = Number(document.querySelector("#subtract2").value)

    document.querySelector ("#difference").addEventListener("click", subtractNumbers);
}

document.querySelector ("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (multNumber1, multNumber2) => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value)
    let multiplyNumber2 = Number(document.querySelector("#factor2").value)

    document.querySelector ("#product").addEventListener("click", multiplyNumbers);
}

document.querySelector ("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

function divideNumbers (divNumber1, divNumber2) {
    let divNumber1 = Number(document.querySelector("#dividend").value)
    let divNumber2 = Number(document.querySelector("#divisor").value)

    document.querySelector ("#quotient").addEventListener("click", divideNumbers);
}

document.querySelector ("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

let numeric = document.querySelector("subtotal").value;

if (document.getElementById("member").checked) {
    new_total = numeric - numeric * 0.2;
}
else{
    new_total = numeric
}

document.querySelector("total").textContent = subtotal.tofixed(2);

document.querySelector ("#getTotal").addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.getElementById("array").textContent = numbers.join(", ");

/* Output Odds Only Array */

let oddNumbers = numbers.filter(function(number) {
    return number %2 !==0;
});

document.querySelector("#odds").innerHTML = numbers.filter(number => number%2 !==0)

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbers.filter(number => number%2 ===0)

/*let evenNumbers = numbers.filter(function(number){
    return number %2 ==0;
});

document.querySelector("#evens").textContent = numbers.join(", ");*/

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, number) => sum+number) ;

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbers.map(number => number*2);

/* Output Sum of Multiplied by 2 Array */

let mult = numbers.map(function(number){
    return number*2
});
let SumOfMultiplied = mult.reduce(function(sum, number){
    return sum + number;
});
document.querySelector("#sumOfMultiplied").innerHTML = SumOfMultiplied