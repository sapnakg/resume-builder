import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext(){
    this.router.navigateByUrl('/header/experience');
  }

  onPrev(){
    this.router.navigateByUrl('/header/personal')
  }
}
