// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordLength;
var upperConf;
var lowerConf;
var specialConf;
var numberConf;
var userChoice;


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// changing lowercase letters into uppercase
var blankUpper = [];
var toUpper = function(x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

var special =   ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// starting functions
function generatePassword() {
  passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128 characters")
  console.log("password length" + passwordLength);

if (!passwordLength) {
  alert("Please enater a value");
}

else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You must choose between 8 and 128 characters");
  console.log("password length" + passwordLength);
}

else {
  lowerConf = confirm("Do you want to include lower case letters?");
  console.log("lowercase" + lowerConf)
  upperConf = confirm("Do you want to include upper case letters?");
  console.log("uppercase" + upperConf)
  numberConf = confirm("Do you want to include numeric values?");
  console.log("numbers" + numberConf)
  specialConf = confirm("Do you want to include special characters?");
  console.log("special" + specialConf)

};
// no answer
if (!lowerConf && !upperConf && !numberConf && specialConf) {
  userChoice = alert("You must choose a criteria");
}
// 4 true options
else if (lowerConf && upperConf && numberConf && specialConf) {
  userChoice = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoice);
}
// 3 true options
else if (lowerConf && upperConf && numberConf) {
  userChoice = lowerCase.concat(upperCase, numbers);
  console.log(userChoice)
}

else if (lowerConf && upperConf && specialConf) {
  userChoice = lowerCase.concat(upperCase, special);
  console.log(userChoice);
}

else if (lowerConf && numberConf && specialConf) {
  userChoice = lowerCase.concat(numbers, special);
  console.log(userChoice);
}

else if (upperConf && numberConf && specialConf) {
  userChoice = upperCase.concat(numbers, special);
  console.log(userChoice);
}

//2 true options
else if (lowerConf && upperConf) {
  userChoice = lowerCase.concat(upperCase);
  console.log(userChoice);
}

else if (lowerConf && numberConf) {
  userChoice = lowerCase.concat(numbers);
  console.log(userChoice);
}

else if (lowerConf && specialConf) {
  userChoice = lowerCase.concat(special);
  console.log(userChoice);
}

else if (upperConf && numberConf) {
  userChoice = upperCase.concat(numbers);
  console.log(userChoice);
}

else if (upperConf && specialConf) {
  userChoice = upperCase.concat(special);
  console.log(userChoice);
}

else if (numberConf && specialConf) {
  userChoice = numbers.concat(special);
  console.log(userChoice);
}

// 1 true option
else if (lowerConf) {
  userChoice = lowerCase;
  console.log(userChoice);
}

else if (upperConf) {
  userChoice = blankUpper.concat(upperCase);;
  console.log(userChoice);
}

else if (numberConf) {
  userChoice = numbers;
  console.log(userChoice);
}

else if (specialConf) {
  userChoice = special;
  console.log(userChoice);
};

// variable for password lenght
var blankPassword = [];

// math.random for random selection
for (var i = 0; i < passwordLength; i++) {
  var allchoices = userChoice[Math.floor(Math.random() * userChoice.length)];
  blankPassword.push(allchoices);
  console.log(allchoices);
}

// joining and returning the password
var password = blankPassword.join("");
console.log("your password is:" + password)
return password;

}
