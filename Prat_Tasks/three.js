function findLargeword(str){
    let newstrarr=str.split(" ")
    //console.log(newstrarr);
    
    
    let Largeword =newstrarr.reduce((current,accumulator)=>{
    
        return accumulator.length>current.length ? accumulator:current
    })
    
    return Largeword 
    
    }
    
    result=findLargeword("chaitanya is very good Developer")
    console.log(result);