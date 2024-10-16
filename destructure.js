const myInfo = {
    name: 'akib riad',
    age: 25,
    occupation:'Student'
}

// console.log(typeof myInfo.occupation);
// console.log(typeof myInfo.age);

const myInfo2 = {
    name: 'akib riad',
    age: 25,
    occupation:'Student'
}

const {age}= myInfo2;
const {name}= myInfo2;

// console.log(age)
// console.log(name)


// array destructuring 

const getNumber = [10,30,20,50,40];

const [x,y,z,w,s] = getNumber;
// console.log(s);

// double them
function doubleThem(a,b){
    return [a*2,b*2];
}

const [aaaa,b] = doubleThem(9,10)
console.log(doubleThem(5,7))
console.log(aaaa,b)