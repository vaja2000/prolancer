import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { MainComponent } from './views/main/main.component';
import { FooterComponent } from './views/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './views/main/home/home.component';
import { ServicesComponent } from './views/main/services/services.component';
import { AboutUsComponent } from './views/main/about-us/about-us.component';
import { ContactComponent } from './views/main/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationComponent } from './views/authorization/authorization.component';
import { LoginComponent } from './views/authorization/login/login.component';
import { SignupComponent } from './views/authorization/signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollNavbarBgDirective } from './directives/scroll-navbar-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    AuthorizationComponent,
    LoginComponent,
    SignupComponent,
    ScrollNavbarBgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
