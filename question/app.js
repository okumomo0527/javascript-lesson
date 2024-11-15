let nickname = 'ごっしー';
let age = 28;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

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

let averageAge = playerList.reduce(function (acc, cur) {
  return acc + cur.age;
}, 0);

averageAge = averageAge / playerList.length;

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

let firstNum = 5;
let secondNum = 3;

let calculation = remainder(firstNum, secondNum);

console.log(firstNum + 'を' + secondNum + 'で割った余りは' + calculation + 'です。');

// 関数の中で定義した変数はローカル変数といい、関数内でのみスコープが有効となっているため、関数の外で参照できないからです。

let random = Math.floor(Math.random() * 10);
console.log(random);

setTimeout(() => {
  console.log("Hello World!");
}, 3000);

let num = 7;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

let numbers = [];
for (let i=0; i<100; i++) {
  numbers.push(i);
}
console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i=0; i<mixed.length; i++) {
  if (typeof mixed[i] === 'string') {
    console.log('not number');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  } else if (mixed[i] % 2 !== 0) {
    console.log('odd');
  }
}