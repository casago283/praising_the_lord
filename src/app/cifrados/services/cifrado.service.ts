import { Injectable } from '@angular/core';
import { Cifrado } from '../cifrado.interface';
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
    this.cifrados.push({ id: "1", nombre: "Hermoso eres tu", nota: "A", cifradoText: hermoso_eres_tu });
    this.cifrados.push({ id: "2", nombre: "Temprano yo te  buscare", nota: "G", cifradoText: temprano_yo_te_buscare });
  }

  getCifrados() {
    return this.cifrados;
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
      texto = texto?.replaceAll(`|${nota}|`, `|${notasiguiente}|`)
      console.log(`${nota}  ${notasiguiente}`)
    });
    cifrado.cifradoText = texto;
    return cifrado;


  }

  bajarMedioTono(c: Cifrado) {
    let cifrado: Cifrado = c
    let texto = cifrado.cifradoText;
    this.notas.forEach((nota, i) => {
      let notasiguiente = ""
      if (0 == i) {
        notasiguiente = this.notas[0]
      } else {
        notasiguiente = this.notas[i - 1]
      }
      texto = texto?.replaceAll(`|${nota}|`, `|${notasiguiente}|`)
      console.log(`${nota}  ${notasiguiente}`)

    });
    cifrado.cifradoText = texto;
    return cifrado;
  }

}
