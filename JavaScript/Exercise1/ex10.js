//Exercise 10
function multiple(n) {
    if (n<10) {
      return 0;
    }
    var m = 1;
    var str = n.toString().split("");
    var a;
    for (var i = 0; i < str.length; i++) {
      m *= str[i];       
    }
    return 1+multiple(m);
}
console.log( multiple(39));