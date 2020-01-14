import users from './users.js';

const getUserNames = users => {
  return users.map(user => {
    return user.name;
  });
};

console.log(getUserNames(users));
//--------------------------------------------------

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => {
    return user.eyeColor === color;
  });
};

console.log(getUsersWithEyeColor(users, 'blue'));
//----------------------------------

const getUsersWithGender = (users, gender) => {
  const getGender = users.filter(user => user.gender === gender);
  return getGender.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));
//------------------------------------------

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));
//-------------------------------------------

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
//------------------------------------------------------------

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
//----------------------------------------------------------

const calculateTotalBalance = users => {
  return users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
};

console.log(calculateTotalBalance(users));
//------------------------------------------------------

const getUsersWithFriend = (users, friendName) => {
  const getFriend = users.filter(user => user.friends.includes(friendName));
  return getFriend.map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
//-------------------------------------------------

const getNamesSortedByFriendsCount = users => {
  const sortFriends = users.sort((userA, userB) => {
    return userA.friends.length - userB.friends.length;
  });
  return sortFriends.map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
//--------------------------------------------------------------

const getSortedUniqueSkills = users => {
  const userSkils = users.reduce((acc, user, idx) => {
    acc.push(...user.skills);
    let uniqe = acc.filter((user, idx) => acc.indexOf(user) === idx);
    return uniqe.sort();
  }, []);
  return userSkils;
};

console.log(getSortedUniqueSkills(users));
