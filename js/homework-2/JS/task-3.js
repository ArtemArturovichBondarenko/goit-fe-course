const checkForSpam = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(checkForSpam('Google do a roll'));
