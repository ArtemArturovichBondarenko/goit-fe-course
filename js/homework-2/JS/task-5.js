const checkForSpam = function(string) {
  const lowerWords = string.toLowerCase();
  if (lowerWords.includes('sale') || lowerWords.includes('spam')) {
    console.log(true);
  } else {
    console.log(false);
  }
};

console.log(checkForSpam('[SPAM] How to earn fast money?'));
