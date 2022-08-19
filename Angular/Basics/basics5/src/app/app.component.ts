import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   interval:any;
  ngOnInit() {
    this.interval=setInterval(()=>{
      console.log("H");
    },1000);
  }
  ngOnDestroy(){
    if(this.interval){
      clearInterval(this.interval);
    }
  }
  title = 'basics5';
}
