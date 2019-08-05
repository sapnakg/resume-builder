import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoftSkillsComponent } from './skills/softskills/softskills.component';
import { TechSkillsComponent } from './skills/techskills/techskills.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    SoftSkillsComponent,
    TechSkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
