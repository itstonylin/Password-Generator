// all keys
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersSelection = "0123456789";
const symbolsSelection = "!@#$%^&*()_+=";

// variables
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let passLength = document.getElementById("passLength");
let form = document.querySelector("form");
let password = "";
let userSelection = "";

// functions that return a random character
let getLowerCase = () => {
    return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
};
let getUpperCase = () => {
    return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
};
let getNumbers = () => {
    return numbersSelection[Math.floor(Math.random() * numbersSelection.length)];
};
let getSymbols = () => {
    return symbolsSelection[Math.floor(Math.random() * symbolsSelection.length)];
};

// makes sure that at least one checkbox is clicked before generating password
document.querySelectorAll(".passwordFeaturesContainer > input").forEach((item) => {
    item.addEventListener("click", function () {
        if (item.checked) {
            document.querySelectorAll(".passwordFeaturesContainer > input").forEach((thing) => {
                thing.removeAttribute("required");
            });
        }
    });
});
// generate password function
let generatePassword = () => {
    password = "";
    if (lowerCase.checked) {
        password += getLowerCase();
        userSelection += lowerCaseLetters;
    }
    if (upperCase.checked) {
        password += getUpperCase();
        userSelection += upperCaseLetters;
    }
    if (numbers.checked) {
        password += getNumbers();
        userSelection += numbersSelection;
    }
    if (symbols.checked) {
        password += getSymbols();
        userSelection += symbolsSelection;
    }
    while (password.length < passLength.value) {
        password += userSelection[Math.floor(Math.random() * userSelection.length)];
    }
    document.querySelector("h2").innerHTML = password;
};

// calls generatePassword function when form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();
    generatePassword();
});
