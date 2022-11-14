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
import { LoginRegisterComponent } from './views/main/login-register/login-register.component';
import { AuthorizationComponent } from './views/authorization/authorization.component'

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
    LoginRegisterComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
