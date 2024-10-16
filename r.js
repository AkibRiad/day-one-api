const getAge = (person) => person[3];

// console.log(getAge([1,2,3,4,5,6,7]));



const a = [1,2,3,4,5];
const b = [...a];

b.push(60);
// console.log(a);
// console.log(...b);



const getMax = () => Math.max(30,20,50,60,800);

const numbers = [30,50,20,10,5,45];

console.log(getMax());
console.log((Math.max(...numbers)));

