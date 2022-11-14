import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './views/authorization/authorization.component';
import { AboutUsComponent } from './views/main/about-us/about-us.component';
import { ContactComponent } from './views/main/contact/contact.component';
import { HomeComponent } from './views/main/home/home.component';
import { MainComponent } from './views/main/main.component';
import { ServicesComponent } from './views/main/services/services.component';


const routes: Routes = [
  { path: '', component:MainComponent, 
    children: [
      { path: '', component:HomeComponent },
      { path: 'services', component:ServicesComponent },
      { path: 'about-us', component:AboutUsComponent },
      { path: 'contact', component:ContactComponent },
    ]
  },
  { path: 'auth', component:AuthorizationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
