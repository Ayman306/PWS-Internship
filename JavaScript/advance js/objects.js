// objects 
var student={
    name:"Ayaan",
    regno:"123",
}
console.log(student.name);
// object methods 
var user={
    firstname:"Ayman",
    lastname:"k",
    id:1234,
    role:"front-end",
    courses:[],
    buycourse:function(courseName){
        this.courses.push(courseName);
    },
    getCourseCount: function(){
        return this.courses.length;
    },
};
console.log(user.firstname);
user.buycourse("Advance Js");
console.log(user.getCourseCount());

// for each 
let coursesStudied=["HTML","CSS","SCSS","Advance js","Python","Mysql"];
var i;
coursesStudied.forEach( (course)=>(console.log(course)));

// for of for array majorly 
for (const n of coursesStudied){
    console.log(n);
}

// object for in
var empl={
    firstname:"Ayman",
    lastname:"k",
    id:1234,
    role:"front-end",
    
};
for (const n in empl){
    console.log(empl[n]);
}

// prototype object 
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  person.prototype.nationality = "Indian";
  
  const myFather = new person("John", "Doe", 50, "blue");
  console.log(myFather , myFather.nationality);