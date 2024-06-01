//to find the even and odd numbers by using function 

//even number

const arr=[1,2,3,4,5,6,7,8,9,10]

function evennumbers(arr){

    return arr.filter(num=>num%2 ===0) // ===0 it checks the reminder is equal to 0. =>it takes one argument named as number

}

console.log(evennumbers(arr));

// ----------------------------------------------------------------------------------------------------

// odd number

const arr1=[1,2,3,4,5,6,7,8,9,10]

function oddnumber(arr1){
return arr1.filter(num=>num%2!==0)   // !==0 it checks the reminder is not equal to 0. =>it takes one argument named as number
                                     // The  Modulus operator % calculates the remainder of dividing one number by another
}

console.log(oddnumber(arr1));


