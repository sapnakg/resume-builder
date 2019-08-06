import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext(){
    this.router.navigateByUrl('/header/education');
  }

  onPrev(){
    this.router.navigateByUrl('/');
  }
}
