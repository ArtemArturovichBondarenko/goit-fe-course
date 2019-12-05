const calculateEngravingPrice = function(message, pricePerWord = 10) {
  let total = 0;
  const words = message.split(' ');
  for (const word of words) {
    total += pricePerWord;
  }
  return total;
};

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
