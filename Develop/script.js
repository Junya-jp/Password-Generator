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
  if (passwordlength.indexOf(selectlength) > -1){
    symbols_confirm = confirm("Select 'OK' if you would like to include special characters");
    numbers_confirm = confirm("Select 'OK' if you would like to include numbers");
    uppercase_confirm = confirm("Select 'OK' if you would like to include uppercase letters");
    lowercase_confirm = confirm("Select 'OK' if you would like to include lowercase letters");
//If elseif statements corresponding to each confirm statement
    if (symbols_confirm && numbers_confirm && uppercase_confirm && lowercase_confirm) {
      passwordChar = special_chars += num += uppercase += lowercase;
    }else if (lowercase_confirm && numbers_confirm && uppercase_confirm) {
      passwordChar = lowercase += num += uppercase;
    }else if (symbols_confirm && uppercase_confirm && lowercase_confirm) {
      passwordChar = special_chars += uppercase += lowercase;
    }else if (symbols_confirm && numbers_confirm && lowercase_confirm) {
      passwordChar = special_chars += num += lowercase;
    }else if (symbols_confirm && numbers_confirm && uppercase_confirm) {
      passwordChar = special_chars += num += uppercase;
    }else if (uppercase_confirm && lowercase_confirm) {
      passwordChar = uppercase += lowercase;
    }else if (numbers_confirm && lowercase_confirm) {
      passwordChar = num += lowercase;
    }else if (numbers_confirm && uppercase_confirm) {
      passwordChar = num += uppercase;
    }else if (symbols_confirm && lowercase_confirm) {
      passwordChar = special_chars += lowercase;
    }else if (symbols_confirm && uppercase_confirm) {
      passwordChar = special_chars += uppercase;
    }else if (symbols_confirm && numbers_confirm) {
      passwordChar = special_chars += num;
    }else if (lowercase_confirm) {
      passwordChar = lowercase;
    }else if (uppercase_confirm) {
      passwordChar = uppercase;
    }else if (numbers_confirm) {
  passwordChar = num;
    }else if (symbols_confirm) {
  passwordChar = special_chars;
    } else{
      alert("No Criteria selected, please try again!")
  }
} else{
  alert('Try again');
}
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
