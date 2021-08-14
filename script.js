// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordLength;
var upperConf;
var lowerConf;
var specialConf;
var numberConf;
var userChoice;


var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// changing lowercase letters into uppercase
var blankUpper = [];
var toUpper = function(x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);


var specialCharacter =   ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


