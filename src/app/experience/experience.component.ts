import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  addExpForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.addExpForm= new FormGroup({
      'exp': new FormArray([])
    });
  }

  onAddExp(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.addExpForm.get('exp')).push(control)
  }

}
