const arr=[1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];
const temp=[];
var j=0;
for(var i=0;i<arr.length-1;i++){
    if(arr[i]!=arr[i+1]){
        temp[j++]=arr[i];
    }
    
}
temp[j++]=arr[i-1];
for(i=0;i<j;i++){
    arr[i]=temp[i];
}
for(i=0;i<temp.length;i++){
    console.log(temp[i]);
}
