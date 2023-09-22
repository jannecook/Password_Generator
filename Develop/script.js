//Variables relating to potential password characters
var lowercase;
var uppercase;
var numberChar;
var specialChar;


//Enable button
document.getElementById("generate").disabled = false;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Add event listener to trigger prompt message
generateBtn.addEventListener("click", function passwordParameters() {
  var characterQuantityString = prompt("Choose a password length from 8 to 128 characters.  Note: Longer passwords provide greater security.");
  if (!characterQuantityString) {
    return;
  }
  else if (characterQuantityString * 1 >= 8 && characterQuantityString * 1 <= 128) {
    var lowercaseConfirm = window.confirm("Select 'Okay' if you would like to include lowercase letters in your password. Select 'Cancel' if you do not wish to include lowercase letters. Note: The more character types included, the more secure your password will be.");
    var uppercaseConfirm = window.confirm("Select 'Okay' if you would like to include uppercase letters in your password. Select 'Cancel' if you do not wish to include uppercase letters. Note: The more character types included, the more secure your password will be.");
    var numberConfirm = window.confirm("Select 'Okay' if you would like to include numbers in your password. Select 'Cancel' if you do not wish to include numbers. Note: The more character types included, the more secure your password will be.");
    var specialCharConfirm = window.confirm("Select 'Okay' if you would like to include special characters (e.g. #, $, &) in your password. Select 'Cancel' if you do not wish to include special characters. Note: The more character types included, the more secure your password will be.");
    var lower = lowercaseConfirm ? 1 : 0;
    var upper = uppercaseConfirm ? 1 : 0;
    var number = numberConfirm ? 1 : 0;
    var special = specialCharConfirm ? 1 : 0;
    if (lower + upper + number + special == 0) {
      alert("Please select 'Okay' for at least one character type.")
    }
    else {
      console.log(lowercaseConfirm, uppercaseConfirm, numberConfirm, specialCharConfirm)
      console.log(lower, upper, number, special);
      if (lower == 1) {
        lowercase = "abcdefghijklmnopqrstuvwxyz";
      } else {
        lowercase= "";
      }
      console.log(upper);
      if (upper == 1) {
        uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else {
        uppercase = "";
      }
      console.log(uppercase);
      if (number == 1) {
        numberChar = "0123456789";
      } else {
        numberChar = ""
      }
      console.log(numberChar);
      if (special == 1) {
        specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      } else {
        specialChar = ""
      }
      console.log(specialChar);
      var characterSet = lowercase + uppercase + numberChar + specialChar;
      console.log(characterSet);
      var characterQuantityNumber = characterQuantityString * 1
      var password = "";
      console.log(characterQuantityNumber)
      while (password.length < characterQuantityNumber) {
        password += characterSet[Math.floor(Math.random() * characterSet.length)];
      }
      console.log(password)
    }
  } else {
    alert("Please select a number larger than 7 and smaller than 129.");
  }
})

/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/