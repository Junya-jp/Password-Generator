// Assignment code here
//Global variables for function
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase =["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var num = ["0123456789"];
var special_chars= ["!@#$%^&*()_"];
var passwordlength = []
//for loop to add numbers 8 to 128 to passwordlength
for (var i =  8; i<= 128; i++) {
  passwordlength.push(i);
}
function generatePassword() {
  var passwordChar ='';
  //variable to hold value of user selection
  var selectlength = parseInt(prompt("Select length of password (8-128) characters"));
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
