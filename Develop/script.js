// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey U clicked a button");

// 1. promt the user for the password criteria//
//    a. password lengh 8-28
//    b. lowercase, uppercase, numbers, special characters
// 2. validate the input
// 3. generate password based on criteria


// 4. display generated password on the page
  return "Generated Password will show here"; 
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
