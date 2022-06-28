//Exercise 5 
var toppings=['Cheese','Ham','Bits','Tomatoes'];
function makePizza(toppings){
    var str=toppings.toString();
    return str.replaceAll(',',' and ');
}
console.log("A tasty pizza with "+makePizza(toppings));