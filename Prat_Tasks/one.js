// By using spread operator we can 


// 1.create array
// 2.merge array
// 3.extend array



// creating array and merge array

// const emp={
//     myname:"prostack",
//     age:2019
//     }
//     const info={
//     Location:"Bangalore"	
//     }

//     const result={...emp,...info}
//     console.log(result);


// extending array

const emp={
    name:"Rahul",
    sal:45000
}
const info={
    loc:"Hyderabad"
}


const obj1={a: 100, b: 200}
const obj2={c: 300, d: 400}


const result={...emp,...info,obj1,obj2}
console.log(result);