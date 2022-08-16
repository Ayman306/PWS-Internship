import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Hello world</h2>
  <!-- //Two Way Binding 
  //Template reference Variables using # -->
  <input type="text" #myInput/>
  <button (click)="logMessage(myInput.value)" >
    Logs
  </button>
  <br><br>
  <!-- ng Module  -->
  <input [(ngModel)]="name" type="text">
  {{name}}

  <!-- Structural Directives 
  ngIf
  ngSwitch
  ngFor
-->

<!-- first way to writ the if block  -->
<h2 *ngIf="displayName ; else elseBlock">
Hello {{name}}
</h2>
<ng-template #elseBlock>
  <h2>
    Name is Hidden
  </h2>
</ng-template>
<!-- end of first way  -->
<!-- second way to write a if block  -->

<div *ngIf="displayName; then thenBlock; else elseBlock2"></div>
<ng-template #thenBlock>
<h2>The Display Block</h2>
</ng-template>
<ng-template #elseBlock2>
  <h2>The else Block </h2>
</ng-template>
<!-- end of second way to write the code  -->


<!-- ngSwitch  -->
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">Picked Red</div>
  <div *ngSwitchCase="'blue'">Picked Blue</div>
  <div *ngSwitchCase="'green'">Picked Green</div>
  <div *ngSwitchDefault>Re Pick</div>
</div>
<!-- ngSwitch end -->

<!-- ngFor directive  start-->
<div *ngFor="let color of colors; index as i;first as f;last as l;odd as o;even as e">
  <h3>Index:{{i}}  Color: {{color}}   First:{{f}}    Last:{{l}}  Odd:{{o}}   Even:{{e}}</h3>
</div>


<!-- ngFor directive End  -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics2';
  name="Ayman";
  color="red";
  logMessage(value:any){
    console.log(value);
  }
  displayName=false;
  colors=["red","blue","green","yellow"]
}
