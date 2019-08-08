import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  onNext(){
    this.router.navigateByUrl('/');
  }

  onPrev(){
    this.router.navigateByUrl('/header/experience');
  }
}
