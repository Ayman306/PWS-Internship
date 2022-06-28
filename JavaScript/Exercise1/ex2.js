//Exercise 2
var date=new Date();
var current=date.getHours();
if(current<12){
    console.log("Good Morning");
}else if(current>12 | current<16){
    console.log("Good Afternoon");
}else if(current>16 | current<19){
    console.log("Good evening");
}else console.log("Good Night");