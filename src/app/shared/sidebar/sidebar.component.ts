import { Component, ViewChild} from '@angular/core';
import { pokemon } from 'src/app/pokemon/interface/pokemon.interface';
import { MainpageComponent } from 'src/app/pokemon/mainpage/mainpage.component';
import { PokemonService } from 'src/app/pokemon/services/pokemon.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild(MainpageComponent) modal1: any;

  constructor(public pokemonService: PokemonService) { 
    
  }
  ver(personaje:pokemon) {
    this.modal1.cargar(personaje)
    console.log(personaje);
   }
   cerrar(){
    this.modal1.cerrar()
   }

}
