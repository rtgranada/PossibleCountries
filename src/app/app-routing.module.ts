import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Country } from './pages/country/country.component';
import { Home } from './pages/home/home.component';
import { NotFound } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'country/:name', component: Country, pathMatch: 'full' },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
