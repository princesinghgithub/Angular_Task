import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServicessComponent } from './servicess/servicess.component';
import { TrainerComponent } from './trainer/trainer.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:HomeComponent,
    path:"#"
  },
  {
    component:UserComponent,
    path:"user"
  },
  {
    component:LoginPageComponent,
    path:"login-page"
  },
  {
    component:TrainerComponent,
    path:"trainer"
  },
  {
    component:ScheduleComponent,
    path:"schedule"
  },
  {
    component:ServicessComponent,
    path:"servicess"
  },
  {
    component:RegistrationComponent,
    path:"registration"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
