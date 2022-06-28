//Exercise 8
str=["The", "quick","brown","fox"];
var y = str.map(s => s.slice(1));
var x=str.map((str) => str[0]);
x=x.map(name => name.toLowerCase());
var items=[];
for (let i = 0; i < str.length; i++) {
    items[i]=y[i] + x[i]+"ay";
}
// console.log(y);
// console.log(x);
console.log(items.map(x => x.replace(/\b\w/g, c => c.toUpperCase())));