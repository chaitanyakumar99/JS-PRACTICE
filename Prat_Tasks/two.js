const a=[0,1,2,3,4]

// reduce() method is used to reduce an array  to a single value. It itterates over each element of the array 

const value=a.reduce((accumulator,currentvalue)=>accumulator+currentvalue)
console.log(value);