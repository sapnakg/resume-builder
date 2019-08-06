import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext(){
    this.router.navigateByUrl('/header/skills');
  }

  onPrev(){
    this.router.navigateByUrl('/header/education')
  }
}
