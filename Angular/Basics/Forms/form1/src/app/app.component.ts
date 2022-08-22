import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue'];
  topicError=true;
  title = 'forms1';
  userModal=new User('','SapAy@test.com',2222222222,'default','morning',true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value:any){
      if(value=="default"){
        this.topicError=true;
      }else{
        this.topicError=false;
      }
  }
  onSubmit(){
    this._enrollmentService.enroll(this.userModal).subscribe(
      data => console.log("Success!",data),
      error => console.log("Error!",error)
    )
  }
}
