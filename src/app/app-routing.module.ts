import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { ProcessComponent } from './process/process.component';



const routes: Routes = [
  {
		path: '',
		pathMatch: 'full',
		redirectTo: '/home',
	},
  {
  path: 'home',
  component: HomeComponent,
},
{
  path: 'packages',
  component: PackagesComponent,
},
{
  path: 'process',
  component: ProcessComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
