let str="nitin";
let rev="";
rev=str.split("").reverse().join("");
if(rev===str){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome")
}
