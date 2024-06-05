const duplicates=[9,4,9,4,6,7,2,1,6]

function removeduplicatesorting(arr){
    const new1 =Array.from(new Set(arr));
    
    // sorting

    new1.sort((a,b)=>a-b);
  
return new1

}

console.log(removeduplicatesorting(duplicates));