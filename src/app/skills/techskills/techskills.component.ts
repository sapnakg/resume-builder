import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './techskills.component.html'
})
export class TechSkillsComponent implements OnInit {
    techSkillForm : FormGroup;

  constructor() { }

  ngOnInit() {

    this.techSkillForm = new FormGroup({
      'techSkills' : new FormArray([])
    });
  }

  onAddTechSkill() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.techSkillForm.get('techSkills')).push(control)
    
  }
}


//some tech skills as well
