function greet(name){
    return function (message){
        console.log(`${name},${message}`)
    }
}

const nbr=greet("Rahul")
nbr("How are you")
nbr("What are you doing")