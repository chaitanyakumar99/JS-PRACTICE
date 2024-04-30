function findlargeword(str){
      let newstrr=str.split(" ")
     // console.log(largewordarr);

    let newarr=newstrr.reduce((accumulatevalue,currentvalue)=>{
        return accumulatevalue.length>currentvalue.length ? accumulatevalue:currentvalue
    })
    return newarr
}
result=findlargeword("Rahul is a good developer")
console.log(result);