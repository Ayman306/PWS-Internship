import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { count, debounceTime, distinct, elementAt, filter, first, from, last, max, min, Observable, skip, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  // name!: FormControl;
  categories=["Pizza","Burger","Noodels","Pasta","Fried Rice","Chicks"];
  category$:Observable<any>=from(this.categories);
  values=[12,22,32,43,4,9,8,98,69,99];
  values$:Observable<any>=from(this.values);
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchForm=this.fb.group({
      name:new FormControl("")
    });
   this.searchForm.get('name')?.valueChanges?.pipe(
    // take(2),
    // takeWhile((v)=> this.checkCondition(v)),
    // filter((v)=>this.checkCount(v)),
    
     debounceTime(2000)
   )
    .subscribe(data=>{
      console.log(data);
      this.category$.pipe(
        // takeLast(2),
        // first(),
        // last(),
        // elementAt(2)
        // distinct(),
        // skip(2),
        // count()
      ).subscribe(data1=>{
        console.log(data1);
      });
      this.values$.pipe(
        filter((v)=>this.even(v)),
        min()
      ).subscribe(data2 =>{
        console.log(data2);
      });
      
      
      
    });
   
  }
  checkCondition(value:any){
    return value.length >3? false : true;
  }
  checkCount(v:any){
    return v.length <10? true:false;
  }
   even(v:any){
    return v%2==0? true :false;
  }
  readValue(){     }
}
