let str = "ABA";

// let arr = str.split("");
// let revArr = arr.reverse();
// let revStr = revArr.join("");

let revStr = str.split("").reverse().join("");

if(str == revStr){
    console.log("pallindrome ");
}
else{
    console.log("Not Palindrome");
}