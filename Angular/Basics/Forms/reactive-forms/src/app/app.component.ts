import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { passwordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'reactive-forms';
  // registrationForm=new FormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });
  get username(){
    return this.registrationForm.get('username');
  }
  constructor(private fb:FormBuilder){}
  registrationForm=this.fb.group({
    username:['', [Validators.required,Validators.minLength(5),forbiddenNameValidator(/password/)]], 
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  },{validator:passwordValidator});
  loadApiData(){
    // this.registrationForm.setValue({
    //  username:'Sap',
    //  password:'test',
    //  confirmPassword:'test',
    //  address:{
    //   city:'city',
    //   state:'State',
    //   postalCode:'1234'
    //  }
    // });
    this.registrationForm.patchValue({
      username:'Sap',
      password:'test',
      confirmPassword:'test',
      
     });
    
  }
}
