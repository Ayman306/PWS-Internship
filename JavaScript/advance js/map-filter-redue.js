const a=[5,4,3,2];
// map 

var result=a.map((x)=>x*x);
console.log(result);

// filter 

var even=a.filter((x)=>{
    if(x%2==0){
        return x;
    }
})

// reduce

console.log(even);
var output=a.reduce(function(acc,curr){
    arr=arr+curr;
    return arr;
});
console.log(output);