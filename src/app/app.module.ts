import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { GuestmenuComponent } from './guestmenu/guestmenu.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { MentormenuComponent } from './mentormenu/mentormenu.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestmenuComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    UsermenuComponent,
    MentormenuComponent,
    AdminmenuComponent,
    PageNotFoundComponent,
    MainmenuComponent,
    HeadermenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
