import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'] 
        
})
export class EducationComponent  {
@ViewChild('f', { static: false} ) eduDetailsForm: NgForm;

  constructor(private router: Router) { }
 


  onNext(){
    this.router.navigateByUrl('/header/experience');
  }

  onPrev(){
    this.router.navigateByUrl('/header/personal')
  }

onSubmit(){
    console.log(this.eduDetailsForm);

}
}
