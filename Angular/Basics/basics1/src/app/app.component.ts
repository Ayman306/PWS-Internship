import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1> Hello World</h1>
  <h2>Welcome {{name}}</h2>
  <input id="myTest" type="text" value="Ayaan">
  <input disabled id="myTest" type="text" value="Ayaan">
  <input [disabled]="isDisabled" id="myTest" type="text" value="Ayaan"> property binding 
  <br>
  <input bind-disabled="isDisabled" id="myTest" type="text" value="Ayaan"> property binding 
<br>
<br>
  Class Binding
  <h2 [class]="successClass">Colourfull World</h2>
  <h2 class="text-special" [class]="successClass">Colourfull World</h2>
  <h2 [class.text-danger]="hasError"> DangerColor </h2>


  <h2 [ngClass]="messageClasses" > ng Class Directive </h2>


  <!-- style binding -->
  <h2 [style.color]="'purple'">Purple</h2>
  <!-- conditional expression -->
  <h2 [style.color]="hasError ? 'red' : 'green'">Conditional Expression</h2>
  <h2 [style.color]="highlightColor" >Highlighted using variable</h2>

  <h2 [ngStyle]="titleStyle" >ng Style Binding Directives</h2>

  <!--Event Binding-->
  
  <button (click)="onclick()" >Greet</button>
  <button (click)="greeting='Welcome in Template Statement'" >Greet</button>
  {{greeting}}
  <br>

  `,

   
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class AppComponent {
  title = 'basics';
  isDisabled=false;
  name="Ayman";
  successClass="text-success";
  hasError=false;
  isSpecial=true;
  greeting="";
  messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  highlightColor="yellow";
  titleStyle={
    color:"blue",
    fontStyle:"italic"
  }
  onclick(){
    this.greeting="Welcome " +  this.name;
  }
  logMessage(value:any){
    console.log(value);
  }
}
