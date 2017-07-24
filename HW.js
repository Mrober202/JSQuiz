var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();
// i think the output would be "Hi! my name is (wicky wicky) Slim Shady"



score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// the result should be 3


var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
// ducks dogs and lions because the array is being set within the method;





var suspectOne = 'Alan';
var suspectTwo = 'Steve';
var suspectThree = 'John';
var suspectFour = 'Ally';

var allSuspects = function() {
  var suspectThree = 'Adam'
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// Suspect three is John because the global suspect three is called. adam is defined within the method.




var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// the detective name would be Poirot because detective has been made global within the method.




var murderer = 'John';

var outerFunction = function() {
  var murderer = 'Ally';

  var innerFunction = function() {
    murderer = 'Steve';
  }

  innerFunction();
}

outerFunction();
console.log('The murderer is', murderer);
// i think this function would output Steve because steve would be global?