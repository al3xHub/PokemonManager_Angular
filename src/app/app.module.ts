import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneracionesComponent } from './componentes/generaciones.component';
import { PokemonsComponent } from './componentes/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneracionesComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
