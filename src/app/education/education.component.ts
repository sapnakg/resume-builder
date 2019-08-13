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



  onNext() {
    this.router.navigateByUrl('/experience');
  }

  onPrev() {
    this.router.navigateByUrl('/personal');
  }

onSubmit() {
    console.log(this.eduDetailsForm);

}

onFeild() {
  // this.router.navigateByUrl('/education/education-feild');
}
}
