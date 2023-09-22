//Variables relating to potential password characters
var lowercase;
var uppercase;
var numberChar;
var specialChar;
var password = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
//Add event listener to trigger prompt and alert messages
generateBtn.addEventListener("click", function passwordParameters() {
  //Prompt to determine password length
  var characterQuantityString = prompt("Choose a password length from 8 to 128 characters.  Note: Longer passwords provide greater security.");
  //Return to default screen if cancel is selected
  if (!characterQuantityString) {
    return;
  }
  //If a valid character number from 8 to 128 is selected, alerts will appear
  else if (characterQuantityString * 1 >= 8 && characterQuantityString * 1 <= 128) {
    var lowercaseConfirm = window.confirm("Select 'Okay' if you would like to include lowercase letters in your password. Select 'Cancel' if you do not wish to include lowercase letters. Note: The more character types included, the more secure your password will be.");
    var uppercaseConfirm = window.confirm("Select 'Okay' if you would like to include uppercase letters in your password. Select 'Cancel' if you do not wish to include uppercase letters. Note: The more character types included, the more secure your password will be.");
    var numberConfirm = window.confirm("Select 'Okay' if you would like to include numbers in your password. Select 'Cancel' if you do not wish to include numbers. Note: The more character types included, the more secure your password will be.");
    var specialCharConfirm = window.confirm("Select 'Okay' if you would like to include special characters (e.g. #, $, &) in your password. Select 'Cancel' if you do not wish to include special characters. Note: The more character types included, the more secure your password will be.");
    //Take Boolean values and convert to 1 or 0
    var lower = lowercaseConfirm ? 1 : 0;
    var upper = uppercaseConfirm ? 1 : 0;
    var number = numberConfirm ? 1 : 0;
    var special = specialCharConfirm ? 1 : 0;
    //If value is 0, no characters were selected and an alert is triggered
    if (lower + upper + number + special == 0) {
      alert("Please select 'Okay' for at least one character type.")
    }
    //If characters for password generation are selected, password is generated
    else {
      console.log(lowercaseConfirm, uppercaseConfirm, numberConfirm, specialCharConfirm)
      console.log(lower, upper, number, special);
      //Includes character sets in potential password characters based upon alert responses
      if (lower == 1) {
        lowercase = "abcdefghijklmnopqrstuvwxyz";
      } else {
        lowercase = "";
      }
      console.log(lowercase);
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
      //Password is generated using characters in characterSet
      var characterSet = lowercase + uppercase + numberChar + specialChar;
      console.log(characterSet);
      var characterQuantityNumber = characterQuantityString * 1
      password = "";
      console.log(characterQuantityNumber)
      //Selects random characters from characterSet until password reaches length selected by user
      while (password.length < characterQuantityNumber) {
        password += characterSet[Math.floor(Math.random() * characterSet.length)];
      }
      console.log(password)
      //Password value assigned to HTML element
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
      var buttonText = document.getElementById("generate").innerHTML;
      console.log(buttonText);
      console.log(password);
      //If a password has already been generated, change button text to "Generate New Password"
      if (password != "") {
        document.getElementById("generate").innerHTML = "Generate New Password";
      }
    }
    //Alert if password length is not within the accepted parameters
  } else {
    alert("Please enter a number larger than 7 and smaller than 129.");
  }
})