const checkForSpam = function(string) {
  const lowerWords = string.toLowerCase();
  return lowerWords.includes('sale') || lowerWords.includes('spam');
};

console.log(checkForSpam('Get best sale offers now!'));
