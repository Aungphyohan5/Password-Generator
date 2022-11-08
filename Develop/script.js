// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var userInput = window.prompt("How long would like to set the password betwenn 8 and 128?")
  console.log(userInput)


  if (isNaN(userInput)) {
    alert("Invalid entry. Please enter a number!")
  }

  if (userInput === null) {
    return
  }

  if (userInput < 8 || userInput > 128) {
    alert("Please choose between 8 and 128.")
    return
  }

  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  var numberic = ["0123456789"]
  var specialCharacters = ["~!@#$%^&*()"]


  var userChooseLC = confirm("Would you like to include the lowercase?")
  var userChooseUC = confirm("Would you like to include the uppercase?")
  var userChooseNum = confirm("Would you like to include the number?")
  var userChooseSC = confirm("Would you like to include the special characters?")



  if (userChooseLC || userChooseNum || userChooseSC || userChooseUC) {
    alert("Thank you")
  } else {
    alert("One character type must be selected")
    return
  }
  var selectedPW = [];

  if (userChooseLC === true) {
    selectedPW += (lowerCase)
  }


  if (userChooseUC === true) {
    selectedPW += (upperCase)
  }


  if (userChooseNum === true) {
    selectedPW += (numberic)
  }


  if (userChooseSC === true) {
    selectedPW += (specialCharacters)
  }
  console.log(selectedPW);


  var password = [];

  for (var i = 1; i <= userInput; i++) {
    var randomPw = Math.floor(Math.random() * selectedPW.length + 1);
    password += selectedPW.charAt(randomPw)
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
