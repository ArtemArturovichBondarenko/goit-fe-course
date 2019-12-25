const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.mood = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log('values', user[key]);
}

console.table(user);
console.log(keys);
