import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId:any;
  constructor(private route:ActivatedRoute , private router:Router) { }

  ngOnInit() {
    //let id= this.route.snapshot.paramMap.get('id');
    //this.departmentId=id;
     this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get("id");
      this.departmentId=id;
    });
  }
  goPrev(){
    let prevId=this.departmentId-1;
    this.router.navigate(['/department',prevId]);
  }
  goNext(){
    let nextId=this.departmentId + 1;
    this.router.navigate(['/department',nextId]);
  }
}
