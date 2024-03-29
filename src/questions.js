var selectElementsStartingWithA = function(array) {
  function startingWithA(word) {
         // use .charAt(0) instead of just [0] to be more explicit
         return word.charAt(0) === 'a';
     }
     return array.filter(startingWithA);
  };

// var selectElementsStartingWithVowel = function(array) {
//   return 'Write your method here';
// }

var removeNullElements = function(array) {
  function removingNulls(word) {
    return word !== null;
  }
  return array.filter(removingNulls);
}

var removeNullAndFalseElements = function(array) {
  function removingNulls(word) {
    return word !== null && word !== false;
  }
  return array.filter(removingNulls);
}

var reverseWordsInArray = function(array) {
  function wordReverser(word) {
    return word.split("").reverse().join("");
  }
  return array.map(wordReverser);
}

// var everyPossiblePair = function(array) {
//   return 'Write your method here';
// }

var allElementsExceptFirstThree = function(array) {
  return array.splice(3);
}

// var addElementToBeginning = function(array, element) {
//   return 'Write your method here';
// }
//
// var sortByLastLetter = function(array) {
//   return 'Write your method here';
// }
//
// var getFirstHalf = function(string) {
//   return 'Write your method here';
// }
//
// var makeNegative = function(number) {
//   return 'Write your method here';
// }
//
// var numberOfPalindromes = function(array) {
//   return 'Write your method here';
// }
//
// var shortestWord = function(array) {
//   return 'Write your method here';
// }
//
// var longestWord = function(array) {
//   return 'Write your method here';
// }
//
// var sumNumbers = function(array) {
//   return 'Write your method here';
// }
//
// var repeatElements = function(array) {
//   return 'Write your method here';
// }
//
// var stringToNumber = function(string) {
//   return 'Write your method here';
// }
//
// var calculateAverage = function(array) {
//   return 'Write your method here';
// }
//
// var getElementsUntilGreaterThanFive = function(array) {
//   return 'Write your method here';
// }
//
// var convertArrayToObject = function(array) {
//   return 'Write your method here';
// }
//
// var getAllLetters = function(array) {
//   return 'Write your method here';
// }
//
// var swapKeysAndValues = function(object) {
//   return 'Write your method here';
// }
//
// var sumKeysAndValues = function(object) {
//   return 'Write your method here';
// }
//
// var removeCapitals = function(string) {
//   return 'Write your method here';
// }
//
// var roundUp = function(number) {
//   return 'Write your method here';
// }
//
// var formatDateNicely = function(date) {
//   return 'Write your method here';
// }
//
// var getDomainName = function(string) {
//   return 'Write your method here';
// }
//
// var titleize = function(string) {
//   return 'Write your method here';
// }
//
// var checkForSpecialCharacters = function(string) {
//   return 'Write your method here';
// }
//
// var squareRoot = function(number) {
//   return 'Write your method here';
// }
//
// var factorial = function(number) {
//   return 'Write your method here';
// }
//
// var findAnagrams = function(string) {
//   return 'Write your method here';
// }
//
// var convertToCelsius = function(number) {
//   return 'Write your method here';
// }
//
// var letterPosition = function(array) {
//   return 'Write your method here';
// }
