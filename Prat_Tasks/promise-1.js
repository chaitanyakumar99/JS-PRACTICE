let tea=new Promise((resolve,reject)=>{
    teapro=true;
    if(teapro){
        resolve("tea is reddy...!")
    }
    else{
        reject("tea is not available")
    }
})

tea
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>[
    console.log(err)
])