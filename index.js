function isPalindrome(word) {
  // Write your algorithm here
  const reversedStr = word.toLowerCase().split("").reverse().join("");
  if (reversedStr === word) return true;
  return false;
}


if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;