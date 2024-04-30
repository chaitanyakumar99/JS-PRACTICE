// const array = [1,2,3,4,5,6,7,8,9]

const array = [1,2,3,4,5,6,7,8,9]

const evenNumbers=array.filter(num => num%2==0)

console.log("EvenNumbers",evenNumbers);

const oddNumbers=array.filter(num =>num%2!==0)

console.log("OddNumbers",oddNumbers);
