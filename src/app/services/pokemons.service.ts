import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  personajes = [{ 'id': 1, 'nombre': 'Bulbasaur', 'categoria': 'planta y venenosa', 'talla': 0, 'peso': 0,'imagen': "./assets/1.png"},
  { 'id': 2, 'nombre': 'Ivysaur', 'categoria': 'planta y venenosa', 'talla': 1, 'peso':13,'imagen': "./assets/2.png"},
  { 'id': 3, 'nombre': 'Venusaur', 'categoria': 'planta y venenosa', 'talla': 2, 'peso':100, 'imagen': "./assets/3.png"},
  { 'id': 4, 'nombre': 'Charmander', 'categoria': 'fuego', 'talla': 0.6 , 'peso': 8.5, 'imagen': "./assets/4.png"},
  { 'id': 5, 'nombre': 'Charmaleon', 'categoria': 'fuego', 'talla': 1.1 , 'peso':19 ,'imagen': "./assets/5.png"},
  { 'id': 6, 'nombre': 'Charizard', 'categoria': 'fuego', 'talla': 1.7 , 'peso': 90.5, 'imagen': "./assets/6.png"}]

  getPersonajes() {
    return this.personajes;
    }
  
  contarPersonajes() {
    return this.personajes.length;
  }
  
  buscarPersonaje(nombreDelPersonaje: string) {
    let regex = new RegExp(nombreDelPersonaje, 'gi');
    return this.personajes.filter(personaje => personaje.nombre.match(regex));
  }

}
