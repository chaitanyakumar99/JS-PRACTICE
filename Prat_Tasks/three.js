// function findLargeWord(str){
// let newstrarr=str.split(" ")
// //console.log(newstrarr);

//  let largeword =  newstrarr.reduce((curr,acc)=>{
   
//     return acc.length>curr.length ? acc :curr
// })
//     return largeword
// }
// largeword=findLargeWord("chai is  very good developer")
// console.log(largeword);


function findLargeword(str){
let newstrarr=str.split(" ")
//console.log(newstrarr);


let Largeword =newstrarr.reduce((current,accumulator)=>{

    return accumulator.length>current.length ? accumulator:current
})

return Largeword 

}

result=findLargeword("Rahul is very good developer")
console.log(result);