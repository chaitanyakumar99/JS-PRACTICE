
//Highest and  Lowest Numbers differences

// const nbr=[1,55,90,20,40,80,60]

// const result=Math.max(...nbr);
// const result1=Math.min(...nbr);

// console.log(result - result1);

const nbr=[1,55,90,20,40,80,60]

const sortarr=nbr.sort((a,b)=>a-b)
const Maxnbr=sortarr[sortarr.length-1]
const Minnbr=sortarr[0]

console.log(Maxnbr - Minnbr);