

//Second highest number and lowest number




//second highest number

const arr=[10,5,7,9,19,15]

// how to call the function ?
// by using function name

function secondhighestnbr(arr){

    if(arr.length<2){               //to ensure that the array has atleast two numbers before attempting to find the second highest number - that's why we use length property
        return null;                // null - to indicate that a variable has no value 
    }
    else{
    arr.sort((a,b)=>b-a);          // sorting  the values highest to lowest
    console.log(arr);
    return arr[1]                  //  to find the value using indexing    
    }              
}

console.log(secondhighestnbr(arr));

// -------------------------------------------------------------------------------------------------------------------

//lowest number


const arr1=[10,5,7,9,19,15]

// // how to call the function ?
// // by using function name

function lowestnbr(arr1){
    if(arr1.length<2){                //to ensure that the array has atleast two numbers before attempting to find the second highest number - that's why we use length property
        return null;                  // null - to indicate that a variable has no value or that an object does not exit
    }
    else{
    arr1.sort((a,b)=>a-b);             // sorting  the values lowest to  highest
    console.log(arr1);
    return arr1[0]                     // to find the value using indexing
    }                    
}

console.log(lowestnbr(arr1));



