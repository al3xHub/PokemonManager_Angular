import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() personaje = {'id':0, 'nombre':'', 'categoria':'', 'talla':0, 'peso':0, 'imagen': ''};

  @Output() eventoClicImagen = new EventEmitter();

  clickEnImagen() {
    this.eventoClicImagen.emit(this.personaje.nombre);
    }
}
