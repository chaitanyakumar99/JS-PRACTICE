// 1)"Noon"
// 2)121
// 3)"madam"


//palindrome

let word ="Noon"

let letters=word.split("");
//console.log(letters);

let resverseLetters=letters.reverse()

let reversedword = resverseLetters.join("");

// console.log(reverseword == word);

if(word.toLowerCase() == reversedword.toLowerCase()){
    console.log("It is a palindrome");
}else{
    console.log("It is a  not a palindrome");
}


