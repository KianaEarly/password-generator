var generateBtn = document.querySelector("#generate");

//writes a password using text
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//generates a random password using these characters
generatePassword = function() {
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h",
 "i", "j", "k", "l", "m", "n", "m", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
"V", "W", "X", "Y", "Z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "?", "/", 
"<", ">", ".", ":", ";", ")", "("];
var characterBase = [];
var passwordLength = prompt("enter a password length of 8-128 characters");
//if the user tries to input a password shorter than 8 characters then this alert will pop up
if(passwordLength<8) {
  alert ("You must select a value between 8 and 128.");
  return;
}
//if password is shorter than 128 chars
if(passwordLength>128) {
  alert ("You must select a value between 8 and 128.");
  return;
}
//if user confirms including lowercase chars then we concat(combine) the 2 array's together and console.log the new character base we are working with
if(confirm ("include lowercase characters?")) {
  characterBase=characterBase.concat(lowercaseCharacters)
  console.log(characterBase)
};
//adds uppercase to characterbase
if(confirm ("include uppercase characters?")) {
  characterBase=characterBase.concat(uppercaseCharacters)
   console.log(characterBase)
};
//adds numbers to character base
if(confirm ("include numbers?")) {
  characterBase=characterBase.concat(numberCharacters)
   console.log(characterBase)
};
//adds special characters to charbase
if(confirm ("include special characters?")) {
  characterBase=characterBase.concat(specialCharacters)
   console.log(characterBase)
};

if(characterBase.length == 0) {
  alert ("You must choose at least one character type");
  return;
}
//for loop to randomly generate a password
var password = "";
for (let index = 0; index < passwordLength; index++) {
  password+=characterBase[Math.floor(Math.random()*characterBase.length)]
}; return password;
}

generateBtn.addEventListener("click", writePassword);
