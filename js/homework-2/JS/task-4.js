const formatString = string =>
  string.length > 40 ? `${(string = string.slice(0, 40))}...` : string;
// const formatString = function(string) {
//   if (string.length > 40) {
//     string = string.slice(0, 40) + '...';
//   }
//   return string;
// };
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
