function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback(); //second
}
function callMe() {
    console.log('I am callback function');
}
greet('Developer', callMe); //first executes


function createQuote(quote, callback){ 
    var myQuote = "The better goals, " + quote;
    callback(myQuote); // 2
  }
  function logQuote(quote){
    console.log(quote);
  }
  createQuote("achieved after hard work!", logQuote); // 1
  
