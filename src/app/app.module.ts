import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoftSkillsComponent } from './skills/softskills/softskills.component';

import { HeaderComponent } from './header/header.component';
import { TechSkillsComponent } from './skills/techskills/techskills.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';

import { EducationFeildComponent } from './education/education-feild/education-feild.component';
import { ExperienceFieldComponent } from './experience/experience-field/experience-field.component';



import {enableProdMode} from '@angular/core';
enableProdMode();


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HeaderComponent,
    SoftSkillsComponent,
    TechSkillsComponent,
    WelcomeComponent,
    HeaderComponent,
    EducationFeildComponent,
    ExperienceFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
