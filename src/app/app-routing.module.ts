import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddnotesComponent } from './components/addnotes/addnotes.component';
import { AuthGuard } from 'src/services/auth.guard';
import { AnotherAuthGuard } from 'src/services/another-auth.guard';
const routes: Routes = [
  {
    path:'',
    component: SignUpComponent,
    canActivate:[AnotherAuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'addnotes/:id',
        component: AddnotesComponent
      },
      {
        path:'addnotes',
        component: AddnotesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
