// sort :- it is used to ascending order and descending order

// descding order :-

// const nbr=[10,55,90,20,40,80,60]

// const result =nbr.sort((a,b)=>{
//     if (b>=a){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// console.log(result);

// -----------------------------------------------------------------

const nbr=[10,55,90,20,40,80,60]

const result=nbr.sort((a,b)=>b-a)
console.log(result);