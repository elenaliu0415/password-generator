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

// When functions are complete, display password on the page (textarea)

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.

  // Initialize and declare arrays for different charactoer options
  var useLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var useUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var useNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var useSpecial = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  // Prompt window to indicate the users what to enter
  var passLength = prompt(
    "Please enter a number between 8 and 128 to specify password length"
  );

  // Initialize and declare an new array that includes the character options the user may select
  var charOption = [];

  // If the password length dosen't meet requirement, alert massage pops up and return to the beginning of the function
  if (passLength < 8 || passLength > 128) {
    alert("Please select a number from 8 to 128");
    return generatePassword();
  }

  // If the previous alert didn't trigger, comfirm window pops up to select one character option or not 
  // If selected, include the char option into the new array create above (charOption)
  if (confirm("Would you like to use lower case letters?")) {
    charOption = charOption.concat(useLowerCase);
  }

  //repeat above 
  if (confirm("Would you like to use upper case letters?")) {
    charOption = charOption.concat(useUpperCase);
  }

  //repeat above 
  if (confirm("Would you like to use numbers?")) {
    charOption = charOption.concat(useNumbers);
  }

  //repeat above 
  if (confirm("Would you like to use special symbols?")) {
    charOption = charOption.concat(useSpecial);
  }

  // If no char options are selected, alert the user to select at lease one and return back to the beginning
  if (charOption === 0) {
    alert("Please select at least one type of characters!");
    return;
  }

  //Initialize a new variable and assign an empty string to it
  var SecurePassword = "";
  var length = passLength;

  // Loop through the password length the user enters, meanwhile assign random 
  // values from selected char option(s)
  for (var i = 0; i < length; i++) {
    SecurePassword += charOption[Math.floor(Math.random() * charOption.length)];
  }

  // Return the final password gernerated randomly
  var SecurePassword = SecurePassword;
  return SecurePassword;
}

// Write password to the #password input
function writePassword() {
  var SecurePassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = SecurePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

String.fromCharCode(...Array(123).keys()).slice(97);
