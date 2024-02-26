import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { FormBuscarPersonaje } from '../../models/form-buscar-personaje';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit{
 

  pokemonSeleccionado = '';

  personajes=[{'id': 0, 'nombre': '', 'categoria': '', 'talla': 0, 'peso': 0, 'imagen': '',}];

  cuenta = 0;

  formBuscarPersonaje = new FormBuscarPersonaje("");
 

  constructor(private servicePokemons: PokemonsService){}

  ngOnInit(){
    this.personajes = this.servicePokemons.getPersonajes();
    this.cuenta = this.servicePokemons.contarPersonajes();
  }


  buscar(nombreDelPersonaje: string) {
    this.personajes = this.servicePokemons.buscarPersonaje(nombreDelPersonaje);
    }
  
  cancelarBuscar() {
    this.personajes = this.servicePokemons.getPersonajes();
    this.formBuscarPersonaje.setNombre('');
    }

}
