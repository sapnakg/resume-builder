import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-education-feild',
  templateUrl: './education-feild.component.html',
  styleUrls: ['./education-feild.component.css']
})
export class EducationFeildComponent implements OnInit {


  eduFeildsForm: FormGroup;


  constructor() { }

  // tslint:disable-next-line: adjacent-overload-signatures
  ngOnInit() {
    this.eduFeildsForm = new FormGroup({
      eduFeilds : new FormArray([])
    });
  }

  onAddSEduFeilds() {
    const control = new FormControl(null, Validators.required);
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    (<FormArray> this.eduFeildsForm.get('eduFeilds')).push(control);

  }
}
