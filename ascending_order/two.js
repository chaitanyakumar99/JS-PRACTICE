// ascending order :-

// const nbr=[50,20,70,30,15,80,2]

// const result=nbr.sort((a,b)=>a-b);
// console.log(result);


// ------------------------------------------------------------------------------

const nbr=[50,20,70,30,15,80,2]

const result=nbr.sort((a,b)=>{
    if (a>=b){
        return 1;
    }
    else {
        return -1;
    }

});
console.log(result);
