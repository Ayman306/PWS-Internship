var user={
    firstname:"Ayman",
    lastname:"k",
    id:1234,
    role:"front-end",
    courses:[],
    getCourseCount:function(courseName){
        this.courses.push(courseName);
        function hello(){
            console.log("Hello");
            console.log("Line 11",this);
        }
        hello();
    },
   
};
user.getCourseCount();