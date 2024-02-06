import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit{
  personajes = [{ 'id': 1, 'nombre': 'Bulbasaur', 'categoria': 'planta y venenosa', 'talla': '', 'peso':'','imagen': "./assets/1.png"},
                { 'id': 2, 'nombre': 'Ivysaur', 'categoria': 'planta y venenosa', 'talla': 1, 'peso':13,'imagen': "./assets/2.png"},
                { 'id': 3, 'nombre': 'Venusaur', 'categoria': 'planta y venenosa', 'talla': 2, 'peso':100, 'imagen': "./assets/3.png"},
                { 'id': 4, 'nombre': 'Charmander', 'categoria': 'fuego', 'talla': 0.6 , 'peso': 8.5, 'imagen': "./assets/4.png"},
                { 'id': 5, 'nombre': 'Charmaleon', 'categoria': 'fuego', 'talla': 1.1 , 'peso':19 ,'imagen': "./assets/5.png"},
                { 'id': 6, 'nombre': 'Charizard', 'categoria': 'fuego', 'talla': 1.7 , 'peso': 90.5, 'imagen': "./assets/6.png"}]
  
  constructor(){}
  ngOnInit(){}

}
