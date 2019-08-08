import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isClicked = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBuild(){
    this.router.navigateByUrl('/personal');
    //this.isClicked = true;
  }
}
