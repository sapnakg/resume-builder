import { Component, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import {  NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit  {
  // tslint:disable-next-line: no-trailing-whitespace
  
  @ViewChild('f', { static: false} ) eduDetailsForm: NgForm;
   educationForm: FormGroup;
  ngOnInit() {
    this.initForm();
  }

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
// tslint:disable-next-line: one-line
private initForm(){
  const eduName = '';
  const eduPercentage = '';
  const eduFromyear = '';
  const eduToyear = '';

  this.educationForm = new FormGroup({
  schoolName: new FormControl(eduName, Validators.required),
  percentage : new FormControl(eduPercentage, Validators.required),
  fromYear : new FormControl(eduFromyear, Validators.required),
  toYear : new FormControl(eduToyear, Validators.required),

  });
}

onFeild() {
  // this.router.navigateByUrl('/education/education-feild');
}
}
