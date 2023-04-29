import { Injectable } from '@angular/core';
import { Cifrado } from '../model/cifrado.interface';
import { algoestacallendoaqui } from '../files/algo_esta_cayendo_aqui';
import { circulo01 } from '../files/circulo01';
import { diosestaaqui } from '../files/dios_esta_aqui';
import { elespiritudediosesta } from '../files/el_espiritu_de_dios_esta_en_estelugar';
import { en_el_nombre_de_jesus } from '../files/en_el_nombre_de_jesus';
import { eres } from '../files/eres';
import { haymomentosquelaspalabras } from '../files/hay_momentos_que_las_palabras';
import { hermoso_eres_tu } from '../files/hermoso_eres_tu';
import { temprano_yo_te_buscare } from '../files/temprano_yo_te_buscare';

@Injectable({
  providedIn: 'root'
})
export class CifradoService {
  cifrados = new Array<Cifrado>()
  notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  notas2 = ["C", "B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#"]
  constructor() {
   
    if (null == localStorage.getItem('cifrado')) {
      this.cifrados.push({ id: "1", nombre: "Hermoso eres tu", nota: "A", cifradoText: hermoso_eres_tu });
      this.cifrados.push({ id: "2", nombre: "Dios esta aqui", nota: "G", cifradoText: diosestaaqui });
      this.cifrados.push({ id: "3", nombre: "Eres", nota: "", cifradoText: eres });
      this.cifrados.push({ id: "4", nombre: "El espiritu de Dios esta en este lugar", nota: "", cifradoText: elespiritudediosesta });
      this.cifrados.push({ id: "5", nombre: "En el nombre de Jesus", nota: "", cifradoText: en_el_nombre_de_jesus });
      this.cifrados.push({ id: "6", nombre: "Algo esta cayendo aqui", nota: "", cifradoText: algoestacallendoaqui });
      this.cifrados.push({ id: "7", nombre: "Hay momentos que las palabras", nota: "", cifradoText: haymomentosquelaspalabras });
      this.cifrados.push({ id: "8", nombre: "Progresion 01", nota: "", cifradoText: circulo01 });
      localStorage.setItem('cifrado', JSON.stringify(this.cifrados));
      console.log("no hay registros")
      console.log()
    }else{
      let cif = `${localStorage.getItem('cifrado')}`
      this.cifrados = JSON.parse(cif)
    }

  }

  getCifrados() {
    return this.cifrados;
  }

  filtrarCifrados(filtro:string){
    let cifrados = this.cifrados.filter(s => s.nombre?.includes( filtro))
    return cifrados;
  }


  getCifrado<Cifrado>(id: string) {
    let cifrado = this.cifrados.filter(s => s.id == id)
    return cifrado[0];
  }
  subirMedioTono(c: Cifrado) {
    let cifrado: Cifrado = c
    let texto = cifrado.cifradoText;
    let notasiguiente = ""
    this.notas2.forEach((nota, i) => {
      if (0 == i) {
        notasiguiente = this.notas2[11]
      } else {
        notasiguiente = this.notas2[i - 1]
      }
      texto = texto?.replaceAll(`|${nota}|`, `|--${notasiguiente}--|`)
      console.log(`${nota}  ${notasiguiente}`)
    });
    cifrado.cifradoText = texto.replaceAll('--', '');
    localStorage.setItem('cifrado', JSON.stringify(this.cifrados));
    return cifrado;
  }

  bajarMedioTono(c: Cifrado) {
    let cifrado: Cifrado = c
    let texto = cifrado.cifradoText;
    this.notas.forEach((nota, i) => {
      let notasiguiente = ""
      if (0 == i) {
        notasiguiente = this.notas[11]
      } else {
        notasiguiente = this.notas[i - 1]
      }
      texto = texto?.replaceAll(`|${nota}|`, `|--${notasiguiente}--|`)
      console.log(`${nota}  ${notasiguiente}`)

    });
    cifrado.cifradoText = texto.replaceAll('--', '');
    localStorage.setItem('cifrado', JSON.stringify(this.cifrados));
    return cifrado;
  }

}
