// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a password
function generatePassword() {

  // Variable of all characters
  uppercase_characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  lowercase_characters = ["abcdefghijklmnopqrstuvwxyz"]
  special_characters = [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]

  // Notify user it's time for a password
  alert("Time to pick a password! Please answer the following questions")

  // Get length of password, reject non correct answers
  while (true) {
    var password_length = prompt("Enter a number between 8 and 128")

    if (isNaN(password_length)) {
      alert("That answer isn't a number or is out of range, try again...")
    }
    else if (password_length >= 8 && password_length <= 128) {
      break
    }
  }

  alert("You can pick uppercase, lowercase, and/or special characters")

  // Loop to get desired character type
  while (true) {
    var lowercase = confirm("Do you want lower case characters?")
    var uppercase = confirm("Do you want upper chase characters?")
    var specialCharacters = confirm("Do you want special characters?")

    if (lowercase || uppercase || specialCharacters) {
      break
    }
  }

  // Empty character array
  characters = [""]

  // Add lowercase if desired
  if (lowercase) {
    characters[0] = characters[0] + lowercase_characters[0]
  }

  // Add uppercase if desired
  if (uppercase) {
    characters[0] = characters[0] + uppercase_characters[0]
  }

  // Add lowercase if desired
  if (specialCharacters) {
    characters[0] = characters[0] + special_characters[0]
  }

  characters = characters[0].split("")

  password = ""
  // Loop to create password
  character_length = characters.length
  for (var i=0; i<password_length; i++) {
    min = Math.ceil(0);
    max = Math.floor(character_length);
    index = Math.floor(Math.random() * (character_length - 0) + 0);
    password = password + characters[index]
  }

  console.log(password)
  console.log(typeof(password))
  
  return password
}