let makeTea = new Promise((resolve, reject) => {
    let teaReady = true; 

    if (teaReady) {
        resolve("Tea is ready! ");
    } else {
        reject("No tea today. ");
    }
});

makeTea
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });
