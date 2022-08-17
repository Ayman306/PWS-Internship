import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'basics3';
  public name="Ayman";
  public message="";
  public text="Hello world";
  public person={
    name:"nobody",
    age:20
  };
  public random=12.5;
  public per=.50;
  public date=new Date();
}
