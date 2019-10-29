import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestmenuComponent } from './guestmenu/guestmenu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { MentormenuComponent } from './mentormenu/mentormenu.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '',   redirectTo: '/guest', pathMatch: 'full' },
  {path:'guest', component:GuestmenuComponent},
  {path:'logout', component:LogoutComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'usermenu', component:UsermenuComponent},
  {path:'mentormenu', component:MentormenuComponent},
  {path:'adminmenu', component:AdminmenuComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
