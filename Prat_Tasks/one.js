
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