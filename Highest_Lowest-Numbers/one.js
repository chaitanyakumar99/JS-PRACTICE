// Highest Number

// const nbr=[1,55,90,20,40,80,60]

// const result=Math.max(...nbr)
// console.log(result);

// ---------------------------------------------------

const nbr1=[1,55,90,20,40,80,60]

const sortarr=nbr1.sort((a,b)=>a-b)
const maxnbr=sortarr[sortarr.length-1]
console.log(maxnbr);
