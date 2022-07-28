const numbers = [1, 2, 3, 4, 5];
function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}
const oddArray = isOdd(numbers);
console.log(oddArray);


const n=[5,7,9,2];
function square(arr,s=[]){
    for(let i=0;i<arr.length;i++){
        result=arr[i]**2;
        s.push(result);
    }
    return s;
}
const sqr=square(n);
console.log("Square is",sqr);