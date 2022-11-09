// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate password function to get the password
//prompt for password criteria
function generatePassword() {
  var userInput = window.prompt("What is the desired length of the password to be? The password should be between 8 and 128.")
  console.log(userInput)


  if (isNaN(userInput)) {
    alert("Invalid entry. Please enter a number!")
    return
  }

  if (userInput === null) {
    return
  }

  if (userInput < 8 || userInput > 128) {
    alert("Please choose between 8 and 128.")
    return
  }
  // characters type variable
  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  var numberic = ["0123456789"]
  var specialCharacters = ["~!@#$%^&*()"]

  //confirmation for character types
  var userChooseLowerCase = confirm("Would you like to include the lowercase?")
  var userChooseUppCase = confirm("Would you like to include the uppercase?")
  var userChooseNum = confirm("Would you like to include the number?")
  var userChooseSpecial = confirm("Would you like to include the special characters?")


  //conditional statement for one character type must be selected
  //conditional statement for slected password criteria
  if (userChooseLowerCase || userChooseNum || userChooseSpecial || userChooseUppCase) {
    alert("Thank you")
  } else {
    alert("At least one character type must be selected")
    return
  }
  var desiredPassword = [];

  if (userChooseLowerCase === true) {
    desiredPassword += (lowerCase)
  }


  if (userChooseUppCase === true) {
    desiredPassword += (upperCase)
  }


  if (userChooseNum === true) {
    desiredPassword += (numberic)
  }


  if (userChooseSpecial === true) {
    desiredPassword += (specialCharacters)
  }
  console.log(desiredPassword);

  //variable for the final password
  var password = [];
  // generate password
  for (var i = 1; i <= userInput; i++) {
    var randomPw = Math.floor(Math.random() * desiredPassword.length + 1);
    password += desiredPassword.charAt(randomPw)
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
