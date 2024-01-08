// Assignment code here

// Put all the possible characters into 4 selecting criteria
const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars ="abcdefghijklmnopqrstuvwxyz";
const numbersChars ="1234567890";
const symbolsChars = "!@#$%^&*()";

function generatePassword(){
  var passwordLength = prompt("Enter the length of the password: (8~128)"); // Ask the user for the length of the password
  passwordLength = parseInt(passwordLength); // Convert the user input to a number

  // Check if User entered a valid number, (a number from 8~128)
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    
    alert("Please enter a valid NUMBER for the password length between 8 and 128.");
    return generatePassword();
  }

  var includeUppercase = confirm ("Uppercase characters included in the password?"); // Ask the user if uppercase is needed
  var includeLowercase = confirm ("Lowercase characters included in the password?"); // Ask the user if lppercase is needed
  var includeNumber = confirm ("Number characters included in the password?"); // Ask the user if numbers is needed
  var includeSymbols = confirm ("Symbol characters included in the password?"); // Ask the user if symbol is needed

// to include the character was seleted in the prompts
  let password ="";
  let chars ="";

  if (includeUppercase){
      chars += uppercaseChars;
  } else chars +="";

  if (includeLowercase){
    chars += lowercaseChars;
  } else chars +="";

  if (includeNumber){
    chars += numbersChars;
  } else chars +="";

  if (includeSymbols){
    chars += symbolsChars;
  } else chars +="";

  // ensure at least one character type was selected
  if (chars ==""){
    return generatePassword();
  }
  
  // randomly pick characters from the seleted criteria and to fit the password length
  for (var i =0; i < passwordLength; i++){
    let random = Math.floor(Math.random() * chars.length);
    password = password + chars[random]
  }
  return password
  
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
