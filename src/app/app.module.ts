import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { GridComponent } from './components/grid/grid.component';
import { NoImageGridPipe } from './pipes/no-image-grid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    DetallePeliculaComponent,
    HomeComponent,
    BuscarComponent,
    NoImagePipe,
    GridComponent,
    NoImageGridPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
