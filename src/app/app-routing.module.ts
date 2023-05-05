import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UpdateComponent } from './update/update.component';
import { ChildComponent } from './child/child.component';
import { TableComponent } from './table/table.component';
import { AddDataComponent } from './add-data/add-data.component';
const routes: Routes = [


  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard] 
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    component: TableComponent,
    path: 'table'
  },
  {
    path: 'addData',
    component: AddDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
