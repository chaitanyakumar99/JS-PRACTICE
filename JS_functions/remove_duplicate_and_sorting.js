
//remove duplicates and sort

const duplicates=[9,4,9,4,6,7,2,1,6]

function removeduplicatesorting(arr){
    
    const new1 =Array.from(new Set(arr));    // 'Set' object is used to store unique values . By passing the 'arr' to the 'Set' constructor, duplicates are automatically removed because 'Set' allows only unique values
                                             // the 'Array.from' method is used to convert the 'Set' back into an array

    // sorting the duplicates

    new1.sort((a,b)=>a-b);
  
return new1

}

console.log(removeduplicatesorting(duplicates));