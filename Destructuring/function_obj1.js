// default  values
// function getuser({ name = "Guest", msg = "Gm" }={}) {
//     console.log(`${msg},${name}`)
// }

// getuser({name:"Rahul",msg:"Hello"})
// getuser({name:"varma"})
// getuser()



//default values

function getuser({ name = "Guest", msg = "Good morning" } = {}) {
    console.log(`${msg},${name}`)

}

getuser({name:"Rahul",msg:"Hello"})
getuser()