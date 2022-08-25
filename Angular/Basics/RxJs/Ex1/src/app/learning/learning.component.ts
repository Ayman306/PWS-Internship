import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})

export class LearningComponent implements OnInit {

    agents!: Observable<string>;
    agentName!:string;
    // using of operator 
    studentList=["Sap","Ayy","Naz","Man"];    
    student:Observable<string[]> =of(this.studentList);
    studentName!:string[];
    studentObj={
      id:10,
      name:"Sap"
    }
    student$:Observable<any>=of(this.studentObj);
    studentO:any;
    //using of operator end
    
    // using from operator 
    orderArr=['Cake','Bread','Milk'];
    orders$:Observable<string>=from(this.orderArr);
    orderName!: string;
    // end of from operator


    // using fromEvent start
    @ViewChild('validate')

    validate!: ElementRef;
    btnOserver$!: Observable<any>;
    fromEvents(){
       this.btnOserver$=fromEvent(this.validate.nativeElement,"click");             
        this.btnOserver$.subscribe(data =>{       
        console.log(data);
      });
    }
      // using fromEvent end 






  constructor() { }

  ngOnInit(): void {
    // observabe 
    this.agents=new Observable(
      (observer)=>{
        try{
          observer.next('Sap');
          setInterval(()=>{
            observer.next('Ayy');
          },3000)
          setInterval(()=>{
            observer.next('Sap Ayy');
          },6000)
        }catch(e){
          observer.error(e);
        }
      });

      this.agents.subscribe(data =>{
        console.log(data);
      });
      this.agents.subscribe(data =>{
        this.agentName=data;
      });
      //observable end

        // using of operator 
      this.student.subscribe(data=>{
        this.studentName=data;                
      });
      this.student$.subscribe(data =>{
        console.log(data);
      });
      // using of operator end

      // using from operator 
      this.orders$.subscribe(data=>{
        setInterval(()=>{
          this.orderName=data;
        },3000);        
      });     
      // using from operator end

      // interval operator start 
      this.orders$.subscribe(data =>{

        
        const seq$= interval(1000);
        seq$.subscribe(num =>{
          if(num<=5)
          console.log(data + num);
        });
        
      });
    
  }

  
 
}
