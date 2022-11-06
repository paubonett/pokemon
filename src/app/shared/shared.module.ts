import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PokemonModule } from '../pokemon/pokemon.module';



@NgModule({
  declarations: [
    SidebarComponent,
    
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PokemonModule
  ]
})
export class SharedModule { }
