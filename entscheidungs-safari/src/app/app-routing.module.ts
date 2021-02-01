import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {ContactComponent} from '../components/contact/contact.component';
import {AboutMeComponent} from '../components/about-me/about-me.component';
import {DataSecurityComponent} from '../components/data-security/data-security.component';
import {SafariComponent} from '../components/safari/safari.component';
import {ImpressumComponent} from '../components/impressum/impressum.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'data-security', component: DataSecurityComponent},
  {path: 'safari', component: SafariComponent},
  {path: 'impressum', component: ImpressumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
