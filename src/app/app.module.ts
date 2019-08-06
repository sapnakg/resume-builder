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
import { SharedComponent } from './shared/shared.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    SoftSkillsComponent,
    TechSkillsComponent,
    WelcomeComponent,
    HeaderComponent,
    SharedComponent
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
