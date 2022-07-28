function init(){
    var name="Ayman";
    function firstname(){
        console.log(name);
    }
    return firstname;
}
var value=init();
value();

function add(s){
    return function(x){
        return s+x;
    }
}
var add=add(4);
console.log(add(5));