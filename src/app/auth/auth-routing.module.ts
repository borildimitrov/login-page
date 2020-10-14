import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componenets/login/login.component';
import { RegisterComponent } from './componenets/register/register.component';
import { ResetPasswordComponent } from './componenets/reset-password/reset-password.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent },
  {path: 'register',component: RegisterComponent },
  {path: 'reset-password',component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
