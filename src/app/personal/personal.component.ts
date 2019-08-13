import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  personalForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {

        this.initForm();
        
    
  }

  onNext(){
    this.router.navigateByUrl('/education');
  }

  onPrev(){
    this.router.navigateByUrl('/');
  }

  private initForm(){
    let persName = '';
    let persMail = '';
    let persLocation = '';
    let persPhone = '';
  
  this.personalForm = new FormGroup({
    'name': new FormControl(persName, Validators.required),
    'email' : new FormControl(persMail, Validators.required),
    'location' : new FormControl(persLocation, Validators.required),
    'phone' : new FormControl(persPhone, Validators.required),
      
    });
  }
}
