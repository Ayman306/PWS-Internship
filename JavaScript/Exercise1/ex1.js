//Excersise 1 
greeting="hello ";
name="world";
//alert(greeting+name);
str=greeting+name;
str=str.replace(/l/g,'1').replace(/o/g,'0');
console.log(str);
var newstr=str.split('').reverse().join('');
console.log(newstr); 