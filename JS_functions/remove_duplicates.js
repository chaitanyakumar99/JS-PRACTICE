const duplicates=[9,4,9,4,6,7,2,1,6]

function removedupl(arr){

    return Array.from(new Set(arr));  // 'Set' objecct is used to store unique values
                                      // the 'Array.from' method is used to convert the 'set' back into an array
}

console.log(removedupl(duplicates));