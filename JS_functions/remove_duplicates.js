const duplicates=[9,4,9,4,6,7,2,1,6]

function removedupl(arr){

    return Array.from(new Set(arr));  
}

console.log(removedupl(duplicates));