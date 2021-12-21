import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'detalle/:id', component: DetallePeliculaComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
