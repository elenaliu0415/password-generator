// Prompt user for length
// let passLength <- prompt result

// IF length < 8 OR length > 128
// alert user that length must be from 8 to 128
// end function
// END IF

// confirm user wants lowercase letters
// let useLowerCase <- confirm result
// confirm user wants uppercase letters
// let useUpperCase <- confirm result
// confirm user wants numbers
// let useNubmers <- confirm result
// confirm user wants special characters
// let useSpecial <- confirm result

// IF useLowerCase = false AND useUpperCase = false AND useNumbers = false AND useSpecial = false
// alert user that at lease one type of characters must be selected
// end function
// END IF

// Create a function that assigns random characters based on the character types selected that satisfies the password length specified

// if useLowerCase is TRUE then the function will refer to an array containing all lowercase values and assign them randomly
// if useUpperCase is TRUE then the function will refer to an array containing all uppercase values and assign them randomly
// if useNumbers is TRUE then the function will refer to an array containing all numbers and assign them randomly
// if useSpecial is TRUE then the function will refer to an array containing all special characters and assign them randomly

// Then the function will randomly assign which variable each character is getting (useUpperCase, useLowerCase, useNumbers, useSpecial)

// When functions are complete, display password ON PAGE or in alert (alert uses alert())


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.
  var passLength = prompt ("Please enter a number between 8 and 128 to specify password length");

  if (passLength > 8 && passLength < 128) {
    var useLowerCase = confirm ("Would you like to use lower case letters?");
    var useUpperCase = confirm ("Would you like to use upper case letters?");
    var useNubmers = confirm ("Would you like to use numbers?");
    var useSpecial = confirm ("Would you like to use special symbols?");
    if (useLowerCase === false && useUpperCase === false && useNubmers === false && useSpecial === false) {
      alert ("Please select at least one type of characters!")
      // return generatePassword();
    } 
  } else {
    alert ("Please select a number from 8 to 128");
    // return generatePassword();
  }


  var arrLowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
   'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var arrUperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var arrNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var arrSpecial = ["!", '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', ".", '/', ':', 
  ';', '<', '=','>', '?', '@', '[', '\\', ']', '^', '_', "`", '{', '|', '}', '~'];


  if (useLowerCase) {
    console.log(arrLowerCase[Math.floor(Math.random() * arrLowerCase.length)]);
  } else if (useUpperCase) {
    console.log(arrUperCase[Math.floor(Math.random() * arrUperCase.length)]);
  } else if (useNubmers) {
    console.log(arrNumbers[Math.floor(Math.random() * arrNumbers.length)]);
  } else if (useSpecial) {
    console.log(arrSpecial[Math.floor(Math.random() * arrSpecial.length)]);
  }

  




  var password = "password1234";
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

String.fromCharCode(...Array(123).keys()).slice(97);
