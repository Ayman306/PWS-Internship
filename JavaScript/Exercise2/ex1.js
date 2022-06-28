// ex1 
const n=8; 
let flag=0;
for(let i=2;i<n;i++){
    if(n%i==0){
        flag=1;
        break;
    }
}
if(flag===0){
    console.log(n+" is a prime number");

}
else{
    console.log(n+" is not a prime number");

}