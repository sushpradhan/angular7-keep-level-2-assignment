import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateRouteGuard} from    './can-activate-route.guard'


const routes: Routes = [{
  path:'login', component: LoginComponent
},
{path: 'dashboard', component: DashboardComponent, canActivate:[CanActivateRouteGuard]},
{
  path: '', redirectTo:'/login',pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
