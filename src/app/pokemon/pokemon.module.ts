import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';



@NgModule({
  declarations: [
    MainpageComponent
  ],
  exports:[
    MainpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
