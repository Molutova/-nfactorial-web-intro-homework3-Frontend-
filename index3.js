let user = {
  name: "Mark",
  age: 25,
  isHeMan: true,
};
console.log(user);

// Работа с операторами
let number = prompt("Enter your number");
if (number <= 18) {
  alert("You are under 18");
} else {
  alert("You are over 18");
}

//Работа с условиями
let a = +prompt("a?", "");
console.log(a); // string
a = +a;
console.log(a); // number

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;

  default:
    alert("you are entered wrong number");
}

//Работа с циклами
// (1)
let num = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    num += i;
  }
}
console.log(num);

// (2)
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
