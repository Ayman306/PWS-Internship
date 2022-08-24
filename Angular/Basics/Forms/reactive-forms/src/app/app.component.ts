import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators,FormArray } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { passwordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
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
 // @ts-ignore
   public registrationForm:FormGroup;
  get username(){
    return this.registrationForm.get('username');
  }
  get email(){
    return this.registrationForm.get('enail');
  }
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails')as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb:FormBuilder, private _registrationService:RegistrationService){}

  ngOnInit() {
    this.registrationForm=this.fb.group({
      username:['sappp', [Validators.required,Validators.minLength(5),forbiddenNameValidator(/password/)]], 
      email:['sss'],
      subscribe:[false],
      password:['sss'],    
      confirmPassword:['sss'],
      address:this.fb.group({
        city:['s'],
        state:['a'],
        postalCode:['p']
      }),
      alternateEmails:this.fb.array([])
    },{validator:passwordValidator});

    this.registrationForm.get('subscribe')?.valueChanges
    .subscribe(checkedValue =>{
      const email =this.registrationForm.get('email');
      if(checkedValue){
        email?.setValidators(Validators.required);
      }else{
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    })
  }
  // registrationForm=this.fb.group({
  //   username:['', [Validators.required,Validators.minLength(5),forbiddenNameValidator(/password/)]], 
  //   email:[''],
  //   subscribe:[false],
  //   password:[''],    
  //   confirmPassword:[''],
  //   address:this.fb.group({
  //     city:[''],
  //     state:[''],
  //     postalCode:['']
  //   })
  // },{validator:passwordValidator});
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
  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
        .subscribe(
          (response: any) => console.log('Success',response),
          (error: any) => console.log('Error!',error)
        );
  }
}
