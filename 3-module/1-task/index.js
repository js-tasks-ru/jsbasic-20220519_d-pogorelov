let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];
function namify(users) {
  // ваш код...
  let names = [];
  users.forEach(element => {
    names.push(element.name);
  });
  return names;
}
console.log(namify(users));
