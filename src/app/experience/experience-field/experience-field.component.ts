import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-experience-field',
  templateUrl: './experience-field.component.html',
  styleUrls: ['./experience-field.component.css']
})
export class ExperienceFieldComponent implements OnInit {

  
  expFeildsForm : FormGroup;
   

  constructor() { }

  // tslint:disable-next-line: adjacent-overload-signatures
  ngOnInit() {
    this.expFeildsForm = new FormGroup({
      'expFeilds' : new FormArray([])
    });
  }

  onAddSExpFeilds() {
    const control = new FormControl(null, Validators.required);
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<FormArray>this.expFeildsForm.get('expFeilds')).push(control)
    
  }

}
