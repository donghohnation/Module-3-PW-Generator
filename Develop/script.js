// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const chars = 
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=<>?[]{}:;";
  let passwordLength = 128;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    let getRandomNumber = Math.floor(Math.random() * chars.length);
    
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = password;



  console.log("Hey U clicked a button");



// 1. promt the user for the password criteria//
//    a. password lengh 8-28
//    b. lowercase, uppercase, numbers, special characters
// 2. validate the input
// 3. generate password based on criteria


// 4. display generated password on the page


  return "Random"; 
}


const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


//DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', () => {
  const length = lengthEl.value;

  console.log(typeof length); 
})

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



// Get references to the #generate element

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
