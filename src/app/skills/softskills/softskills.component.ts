import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './softskills.component.html'
})
export class SoftSkillsComponent implements OnInit {
    softSkillForm : FormGroup;
   

  constructor() { }

  ngOnInit() {
    this.softSkillForm = new FormGroup({
      'softSkills' : new FormArray([])
    });
  }

  onAddSoftSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.softSkillForm.get('softSkills')).push(control)
    
  }

}