import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/main/about-us/about-us.component';
import { ContactComponent } from './views/main/contact/contact.component';
import { HomeComponent } from './views/main/home/home.component';
import { ServicesComponent } from './views/main/services/services.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'services', component:ServicesComponent },
  { path: 'about-us', component:AboutUsComponent },
  { path: 'contact', component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
