import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template:`
        <h2>Employee List</h2>
        <ul *ngFor="let employee of employees">
          <li>{{employee.name}}</li>
        </ul>
        <h2>Employee List using http</h2>
        <ul *ngFor="let employee of employees1">
          <li>{{employee.name}}</li>
        </ul>
  `, 
   styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
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
