// let Empdetails = (emp, callback) => {
//     callback(emp)
// }
// let getDetails=(emp)=>{
// console.log(`Employee:Employee id:${emp.id},Employee Name:${emp.name},Employee sal:${emp.sal},Employee loc:${emp.loc}`)
// }

// Empdetails({id:101,name:"Rahul",sal:4500,loc:"Hyderabad"},getDetails)




let addNbrs=(nbr1,nbr2,callback)=>{
    let sum =nbr1+nbr2;
    callback1(sum)
}

let getDetails=(result)=>{
console.log("the value is",result)
}

addNbrs(5,10,getDetails)