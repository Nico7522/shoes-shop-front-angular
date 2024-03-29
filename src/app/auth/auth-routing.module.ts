import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { alertGuard } from '../guards/alert.guard';
import { ModalComponent } from '../shared/modal/modal.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', canDeactivate: [alertGuard], component: LoginComponent },
  {
    path: 'register',
    canDeactivate: [alertGuard],
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
