let nickname = '私のニックネームはごっしーです。';
let age = '年齢は28歳です。';
console.log(nickname + age);

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let like = '私の好きな言語は' + languages[0] + 'です。';
let study = '次は' + languages[3] + 'を勉強してみたいです。';

console.log(like + study);

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

let averageAge = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;

console.log(averageAge);

function sayHello() {
  console.log('Hello');
};

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

user.birthday = '2000-09-27';

console.log(user);

user.sayHello = function () {
  console.log('Hello!');
};

console.log(user);

user.sayHello();

let calc = {};

calc.add = function (x, y) {
  console.log(x + y);
};

calc.add(2, 5);

calc.subtract = function (x, y) {
  console.log(x - y);
};

calc.subtract(20, 10);

calc.multiply = function (x, y) {
  console.log(x * y);
};

calc.multiply(7, 7);

calc.divide = function (x, y) {
  console.log(x / y);
};

calc.divide(10, 2);

console.log(calc);

function remainder (x, y) {
  return x % y;
}

let x = 5;
let y = 3;

let calculation = remainder(x, y);

console.log(x + 'を' + y + 'で割った余りは' + calculation + 'です。');

// 関数の中で定義した変数はローカル変数といい、関数内でのみスコープが有効となっているため、関数の外で参照できないからです。


