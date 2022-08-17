import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template:`
  <h2>Employee Details</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}} - {{employee.age}}</li>
  </ul>
  <h2>Employee Details using Http</h2>
  <ul *ngFor="let employee of employees1">
    <li>{{employee.name}} - {{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees:any[]=[];  
  public employees1:any[]=[];  
  public errorMsg="";
  constructor(private _employeeService:EmployeeService) { }
  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
    this._employeeService.getFromJson().subscribe(data => this.employees1=data,
      error => this.errorMsg=error);

    
  }
  

}
