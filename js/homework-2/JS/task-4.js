const formatString = function(string) {
  if (string.length > 40) {
    string = string.slice(0, 40) + '...';
  }
  return string;
};
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log('Vestibulum facilisis, purus nec pulvinar iaculis.');
