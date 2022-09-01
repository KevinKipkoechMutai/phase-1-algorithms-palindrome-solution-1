function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

function reverseString(word) {
  return word.split("").reverse("").join("");
}

/* 
  Add your pseudocode here
  //isPalindrome()

  declare a variable and assign it to the reverseString() function.
  pass the argument of the isPalindrome function as argument for the reversedString function
  return true only if the argument is strictly equivalent to the result of reversedString()

  //reverseString()
  return the argument after applying the split(), reverse(), and join() methods to it
*/

/*
  Add written explanation of your solution here
  the ispalindrome function takes an argument and passes it to the reverseString function after invoking it
  the invoked function is assigned to a new variable, reversedWord
  the function then returns a boolean output depending on whether the argument is strictly equivalent to reversedWord

  the reverseString() function uses split(), reverse(), and join() methods to reverse the argument before returning it
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
