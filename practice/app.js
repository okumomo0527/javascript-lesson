
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let age = 23;
console.log(age);

const constant = 'これは定数です';
console.log(constant);

let string = 'JavaScriptの練習';
console.log(string);

let name ='ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
${template}は改行もできます。`;
console.log(templateText);

let num = 10;
console.log(num);

let numTen = 10;
let strTen ='10';
console.log(numTen, strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let decrement = 10;
console.log(decrement);
decrement--;
console.log(decrement);

let bigNum = '25';
let smallNum = '2';
console.log(bigNum + smallNum);

let emptyNames = [];

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';
console.log(Andy); 

let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two);

function question(test) {
  let one = '好きな食べ物は？';
  let two = '好きな色は？';
  let tree = test;
  return `${one}
${two}
${tree}`;
}

console.log(question('好きなものは？'));

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;

  console.log('ここはreturnよりも後ろの処理です。');
}

getArea(5);

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output)  // 名前付きの関数を渡す時は、()を付けずに渡す

function zoo(callback) {
  console.log('zooがやってきた');
  callback();
}

function cat() {
  console.log('猫がやってきた');
}

zoo(cat);

let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~');
  }
};

John.sing();
console.log(John.name);

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);

let value1 = true;
let value2 = false;

console.log(value1);

if(false) {
  console.log('trueです');
}
console.log('処理が終わりました');

let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let math = 199;
if (math >= 195) {
  console.log('正解');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'yellow';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

let myAge = 60;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
}

let loto = 8;

if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let numVal = 7;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '到着';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

console.log(userA === '到着' && userB === '到着');

let errMsg = '';
errMsg === '' ? console.log('ない') : console.log('ある');

let number = 2;
let text = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text);

if (0) {
  console.log('hoge');
}

if (6) {
  console.log('piyo');
}

for (let i = 0; i <= 10; i++) {
  console.log(i + '回目のコンソール');
}

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum+numbers[i];
}

console.log(sum);




