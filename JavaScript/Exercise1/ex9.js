//Exercise 9 
var a=[1,4,3,2,5,7];
var value=4;
var a=a.sort();
for( let i=0;i<a.length;i++){
    if(a[i]>value){
        console.log("The nearest larger value for the number "+value +" is "+a[i]+"at position "+i);
        break;
    }
}