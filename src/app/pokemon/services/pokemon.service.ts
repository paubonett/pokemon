import { Injectable } from '@angular/core';
import { pokemon } from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  pokemon:pokemon[]=[
    {
      imagen:'./assets/001.png',
      nombre:'Bulsaur',
      bio:'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo',
      altura:'0,7 m',
      peso:'6,9 kg',
      categoria:'Semilla'
    },
    {
      imagen:'./assets/002.png',
      nombre:'Ivysaur',
      bio:'Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.',
      altura:'1,0 m',
      peso:'13,0 kg',
      categoria:'Semilla'
    },
    {
      imagen:'./assets/003.png',
      nombre:'Venusaur',
      bio:'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.',
      altura:'2,0 m',
      peso:'100,0 kg',
      categoria:'Semilla'
    },
    {
      imagen:'./assets/004.png',
      nombre:'Charmander',
      bio:'Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas.',
      altura:'1,1 m',
      peso:'32,0 kg',
      categoria:'fuego'
    },
    {
      imagen:'./assets/005.png',
      nombre:'Charmeleon',
      bio:'Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.',
      altura:'0,6 m',
      peso:'8,5 kg',
      categoria:'Llama'
    },
    
    {
      imagen:'./assets/006.png',
      nombre:'Charizard',
      bio:'Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.',
      altura:'1,1 m',
      peso:'19,0 kg',
      categoria:'Llama'
    },

    {
      imagen:'./assets/007.png',
      nombre:'Squirte',
      bio:'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.',
      altura:'1,7 m',
      peso:'90,5 kg',
      categoria:'Llama'
    },
    {
      imagen:'./assets/008.png',
      nombre:'Wartortle',
      bio:'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.',
      altura:'0,5 m',
      peso:'9,0 kg',
      categoria:'Tortuguita'
    },
    {
      imagen:'./assets/009.png',
      nombre:'Blastoise',
      bio:'Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.',
      altura:'1,0 m',
      peso:'22,5 kg',
      categoria:'Tortuga'
    },
    {
      imagen:'./assets/010.png',
      nombre:'Caterpie',
      bio:'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
      altura:'1,6 m',
      peso:'85,5 kg',
      categoria:'Armazón'
    },
    {
      imagen:'./assets/011.png',
      nombre:'Metapod',
      bio:'Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos',
      altura:'0,3 m',
      peso:'2,9 kg',
      categoria:'Gusano'
    },
    {
      imagen:'./assets/012.png',
      nombre: 'Butterfree',
      bio:'Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar.',
      altura:'0,7 m',
      peso:'9,9 kg',
      categoria:'Capullo'
    }
    
  ]
  get inv(): pokemon[] {
    return [...this.pokemon];
  }
  constructor() { }
}
