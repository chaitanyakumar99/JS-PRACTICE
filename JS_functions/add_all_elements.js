
// add all elements of the array

const array1=[1,2,,3,4,5,6,7,8]


function add(array){
// let sum = 0;

// for(let i=0 ; i < array1.length; i++){
//     if (array[i]){
//         sum += array[i] // is used to accumulate the sum of the array elements . 
//                         //'+=' is a operator in javascript that combines additiion and assignment in a single step. 
//     }
// }
//   return sum;
   return array1.reduce((a,b)=>a+b)  // reduce method will return one single output from the single array
}

console.log(add(array1));
 
