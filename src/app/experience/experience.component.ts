import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  // addExpForm : FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.addExpForm= new FormGroup({
    //   'exp': new FormArray([])
    // });
  }

  onNext() {
    this.router.navigateByUrl('/skills');
  }

  onPrev() {
    this.router.navigateByUrl('/education');
  }
  //  onAddExp(){

  //   this.router.navigateByUrl('/experience/experience-field')


  //  }

}
