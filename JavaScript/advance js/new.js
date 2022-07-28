function MyFunc() {
    this.name = "W3Docs";
    this.disc = "All About Programming",
    this.pub = "20-July"
}
MyFunc.prototype.price=123;
let obj=new MyFunc();
console.log(obj , obj.price);
