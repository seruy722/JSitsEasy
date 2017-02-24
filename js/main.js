
'use strict';
let favoriteCars = ['BMW', 'Reno', 'Subaru'];

let user = {
  name: 'Sergey',
  surname: 'Denisiuk',
  dateOfBith: 1989,
  favoriteCars,
  friends: [{ name: 'Vasja', surname: 'Petrovych' }, { name: 'Kolja', surname: 'Shevko' }]
};

console.log(user.friends);
console.log(user.friends[0]);
console.log(user.favoriteCars);

