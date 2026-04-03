const wrapper = document.querySelector(".wrapper");

// creating a div element for the date and appending it to the body
let dateDiv = document.createElement("div");
dateDiv.textContent = new Date().toDateString();

// creating the input element
let inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "input";
inputElement.placeholder = "Square Up!";

// creating output element
let outputElement = document.createElement("div");
outputElement.id = "output";
outputElement.textContent = "";

// creating the button element
let buttonElement = document.createElement("button");
buttonElement.id = "btn";
buttonElement.textContent = "Click to square up!";
buttonElement.addEventListener("click", handleBtn);

function handleBtn(){
    // alert("buttone clicked");
    let inputVal = inputElement.value;
    let convertedVal = new Number(inputVal);

    if(isNaN(convertedVal)){
        outputElement.textContent = "Please enter a valid number";
    } else {
        inputElement.value = convertedVal*convertedVal; 
    }
}

wrapper.appendChild(dateDiv);
wrapper.appendChild(inputElement);
wrapper.appendChild(buttonElement);
wrapper.appendChild(outputElement);