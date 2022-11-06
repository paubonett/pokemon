import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { pokemon } from '../interface/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent  {

  pokemon:pokemon ={imagen:'',nombre:'',bio:'',altura:'',peso:'',categoria:''}
  bandera:boolean=false

  constructor(public pokemonService: PokemonService) { }

  enviar(nombre:PokemonService){
    this.pokemonService=nombre
   }
  
   cargar(personaje:pokemon){
    this.pokemon = personaje
    this.bandera = true
  
 


   }

   cerrar(){
    this.bandera=false
   }

}
