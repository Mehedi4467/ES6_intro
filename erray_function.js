const add = (num1, num2) => num1 + num2;


const sum = add(15,15);
console.log(sum);


// separated array

const number = [12,1,2,3,4,5,6,7,7];

const newArray = [33,...number, 32];

number.push(222);

console.log(number);
console.log(newArray);