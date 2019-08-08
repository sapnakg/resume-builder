import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes= [
   // {path: '',redirectTo: '/welcome', pathMatch: 'full'},
        { path: '', component: WelcomeComponent},
        {path: 'personal', component: PersonalComponent },
        {path: 'education', component: EducationComponent},
        {path: 'experience', component: ExperienceComponent},
        {path: 'skills', component: SkillsComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}