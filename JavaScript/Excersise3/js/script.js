function clearScreen(){
    box.value="";
}
function calc(value){
    var a=value;
    box.value += value;
    expr=box.value;
}
function calculate(){
    var p=box.value;
    var result=eval(p);
    resultd=result;
    hist.push({"expression":expr,"result":resultd});
    showd()
    resultd="";
    expr="";
    box.value=result;
}
function showd(){
    var his_log=document.getElementById("history");
    var str="";
    for(var key in hist){
        str+=""+hist[key]["expression"]+" = "+hist[key]["result"]+"<br>";
    }
    his_log.innerHTML=str;
}
var box=document.getElementById("result");
var hist=[];
var expr="";
var resultd="";