var readlineSync = require("readline-sync")

console.log("Welcome to the Game of thrones quiz! \n")
console.log("Select which Stark you would you like to play as ");
character = ['Jon', 'Arya', 'Sansa', 'Bran', 'Robb'];

index = readlineSync.keyInSelect(character, 'Which characters would like to play for?');
console.clear();
score = 0;
function quiz(question, answer) {
  var answerGiven = readlineSync.question(question);

  if (answerGiven === answer) {
    console.log("You are right! ");
    score = score + 1;
  } else {
    console.log("You are wrong! ");
    score = score - 1;
  }
}

function welcomeChar() {
  console.log("Hello " + character[index] + " fan");
}

switch (index) {
  case 0:
    welcomeChar();
    quiz("Is Jon a Stark? ", "No");
    quiz("Does Jon die? ", "Yes");
    break;

  case 1:
    welcomeChar();
    quiz("Is Arya a Stark? ", "Yes");
    quiz("Has Arya met the faceless god? ", "Yes");
    break;

  case 2:
    welcomeChar();
    quiz("Is Sansa dead? ", "No");
    quiz("Is Sansa a queen? ", "No");
    break;

  case 3:
    welcomeChar();
    quiz("Is Bran dead? ", "No");
    quiz("Does Bran fight the whitewalkers? ", "No");
    break;

  case 4:
    welcomeChar();
    quiz("Is Robb dead? ", "Yes");
    quiz("Did Robb kill the NightKing? ", "No")
    break;

}
console.clear();
if (score > 1) {
  console.log(" \t You are a true fan of " + character[index]);
} else {
  console.log(" \t You are not a true fan of " + character[index]);
}