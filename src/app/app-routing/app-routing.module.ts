import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' }, // redirect to `welcome-component`,
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
]; //constant to define routes

// configures NgModule imports and exports
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
