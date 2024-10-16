const getAge = (person) => person[3];

console.log(getAge([1,2,3,4,5,6,7]));



const a = [1,2,3,4,5];
const b = [...a];

b.push(60);
console.log(a);
console.log(...b);
