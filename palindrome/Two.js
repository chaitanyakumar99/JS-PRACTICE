function Task(str){
    let revStr = str.split("").reverse().join("");
    if(str == revStr){
       return "pallindrome " , str;
    }
    else{
       return "Not Palindrome";
    }
    
}

let answer= Task("ABA");
console.log(answer);