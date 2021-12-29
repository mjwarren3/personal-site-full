console.log("hello world!");

// Variables
var myName = document.getElementsByClassName("my-name")[0];
var submitButton = document.getElementsByClassName("submit-button")[0];
var submitLabel = document.getElementsByClassName("submit-label")[0];
var emailAddress = document.querySelector("#email");
var firstName = document.querySelector("#fname");
var lastName = document.querySelector("#lname");
var message = document.querySelector("#message");

// Event listeners
myName.addEventListener("click", changeName);
submitButton.addEventListener("click", submitMessage);

// Functions
function changeName() {
    myName.innerText = "Mick Wooken"
}

function submitMessage(event) {
    event.preventDefault();
    console.log(firstName.value + lastName.value + emailAddress.value + message.value);
    lastName.value = "";
    firstName.value = "";
    emailAddress.value = "";
    message.value = "";
    submitButton.setAttribute("class", "hidden");
    submitLabel.removeAttribute("class", "hidden");
    submitLabel.setAttribute("class", "mt-4 flex justify-center align-center text-md submit-label");
}