//1
let num ="123"
console.log(Number("123")+7);      
//2
let fvalue = 0;
let result = !fvalue ? "invalid" : "valid";
console.log(result); 
//3
for (let m=0; m <= 10; m++){
if(m%2 === 0){
    continue;
}
console.log(m);
}
//4
let arr1 = [1, 2, 3, 4, 5];
let evenArr1 = arr1.filter(num=> num % 2 === 0);
console.log(evenArr1); 
//5
let arr11 = [1, 2, 3];
let arr12 = [4, 5, 6];
let margeArray = [...arr11,...arr12];
console.log(margeArray);
//6
let dayNumber = 2;
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day  ";
}
console.log(dayName);
//7
let arr = ["a", "ab", "abc"];
let maps = arr.map(str => str.length);
console.log(maps);
//8
let Divisible = 15;
let result1 = (Divisible % 3 === 0 && Divisible % 5 === 0)
  ? "Divisible by both" : "Not divisible by both";
console.log(result1);
//9
let squareNum = (num) => {
  return num * num;
};
console.log(squareNum(5)); 
//10
let User ={name : 'John' , age: 25}
let formatUser = ({name , age}) => {
  return `${name} is ${age} years old `  
}
console.log(formatUser(User))
//11
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//13
let bigElement= (arr) => Math.max(...arr);
console.log(bigElement([1,3,7,2,4]));
//14 
let getKeys =(obj) => Object.keys(obj);
console.log(getKeys({name : 'john', age: 30 }))
//15 
let splitString = (str) => str.split(" ");
console.log(splitString("The quick brown fox"));

