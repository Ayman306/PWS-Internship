//Exercise 3
let bread=prompt("Enter the number of Breads");
let cheese=prompt("Enter the number of cheese");
function sandwich(bread,cheese){
    if(bread<2 &cheese<1){
        alert("Not able to prepare Sandwich");
    }else if(bread>2 & cheese==1){
        return 1;
    }
        var b=bread/2;
        if(b>cheese){
            return cheese;
        }else{
            return b;
        }
}
b=sandwich(bread,cheese);
alert(b+"Sandwichs can be prepared");