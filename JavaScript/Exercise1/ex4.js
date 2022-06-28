//Exercise 4
1.
var a=12;
(function(){
    console.log(a);
}())
//output is 12
2.
var a = 5;
(function() {
 var a = 12;
 console.log(a);
})();
//output is 12
3.
var a = 10;
var x = (function() {
 var a = 12;
 return (function() {
   console.log(a);
 });
})();
x();
//output is 12
4.
var a = 10;
var x = (function() {
 var y = function() {
   var a = 12;
 };
 return function() {
   console.log(a);
 }
})();
x();
//output is 10
5.
var a = 10;
var x = (function() {
 (function() {
   a = 12; 
 })();
 return (function() {
   console.log(a);
 });
})();
x();
//output is 12
6.
var a = 10;
(function() {
 var a = 15;
 window.x = function() {
   console.log(a);
 }
})();
x();
//output is 15