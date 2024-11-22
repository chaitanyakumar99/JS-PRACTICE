let nbrs = [15, 26, 31, 18, 197, 321]

/* let arr = nbrs.filter((num) => {
    return  num % 2 == 0
})
console.log(arr)


 */

let arr = []

for( let num of nbrs){
        if(num%2 ===0){
            arr.push(num)
        }
}
console.log(arr)