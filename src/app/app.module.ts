import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnHeroeComponent } from './un-heroe/un-heroe.component';
import { UsuariosRegistradosComponent } from './usuarios-registrados/usuarios-registrados.component';
import { VideosComponent } from './videos/videos.component';
import { DomSeguroPipe } from './dom-seguro.pipe';
import { ModuloExtraComponent } from './modulo-extra/modulo-extra.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HomeComponent,
    SearchComponent,
    UnHeroeComponent,
    UsuariosRegistradosComponent,
    VideosComponent,
    DomSeguroPipe,
    ModuloExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Persona {
  constructor(
    public nombre: string,
    public sexo: string,
    public correo: string,
    public fecha: Date
  ) { }
}
