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
import { tu_fidelidad } from '../files/tu_fidelidad';
import { glorificate } from '../files/glorificate';
import { somos_el_pueblo_de_dios } from '../files/somos_el_pueblo_de_dios';
import { levantate_miel_san_marcos } from '../files/levantate_miel_san_marcos';
import { la_unica_razon } from '../files/la_unica_razon';
import { el_santo_de_israel } from '../files/el_santo_de_israel';
import { libre } from '../files/libre';
import { ya_ha_llegado_el_momento_de } from '../files/ya_ha_llega_el_momento';
import { hay_una_uncion } from '../files/hay_una_uncion';
import { yo_quiero_mas_de_ti } from '../files/quiero_mas_de_ti';
import { me_gozare_en_tu_presencia } from '../files/me_gozare_en_tu_precencia';
import { soberano_dios } from '../files/soberano_dios';
import { cuan_bello_es_el_señor } from '../files/cuan_bello_es_el_señor';
import { celebrad_a_cristo_celebrad } from '../files/celebrad_a_cristo_celebrad';
import { cristo_no_esta_muerto } from '../files/cristo_no_esta_muerto';
import { el_poderoso_de_israel } from '../files/el_es_el_poderoso_de_israel';
import { venid_todos_y_celebrad } from '../files/venid_todos_y_celebrad';
import { no_hay_lugar_mas_alto } from '../files/no_hay_lugar_mas_alto';
import { oh_moradora } from '../files/oh_moradora';
import { entra_en_la_presencia } from '../files/entra_en_la_presencia';
import { bendito_sea_el_señor_dios_poderoso } from '../files/bendito_sea_el_señor_poderoso';
import { abre_mis_ojos_oh_cristo } from '../files/abre_mis_ojos_oh_cristo';
import { bueno_es_alabarte_senor } from '../files/bueno_es_alabarte_señor';
import { al_que_es_digno } from '../files/al_que_es_digno';
import { grandes_son_tus_maravillas } from '../files/grandes_son_tus_maravillas';
import { anciano_de_dias } from '../files/anciano_de_dias';
import { al_que_me_sine } from '../files/al_que_me_sine';
import { sueños } from '../files/sueños';
import { dios_de_lo_imposible } from '../files/dios_de_lo_imposible';
import { eres_señor_vencedor } from '../files/eres_señor_vencedor';
import { tal_como_soy } from '../files/tal_como_soy';
import { eres_el_mas_precioso } from '../files/eres_el_mas_precioso';
import { recibe_toda_la_gloria } from '../files/recibe_toda_la_gloria';
import { mas_el_dios_de_toda_gracia } from '../files/mas_el_dios_de_toda_gracia';
import { conozco_que_todo_lo_puedes } from '../files/conozco_que_todo_lo_puedes';


@Injectable({
  providedIn: 'root'
})
export class CifradoService {
  incremental: number = 0
  cifrados = new Array<Cifrado>()
  notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  notas2 = ["C", "B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#"]
  constructor() {

    if (null == localStorage.getItem('cifrado')) {
      try {
        this.armarCifrado()
      } catch (error) {
        console.log("hay errores en el Json")
      }

    } else {
      try {
        let cif = `${localStorage.getItem('cifrado')}`
        this.cifrados = JSON.parse(cif)
      } catch (error) {
        console.log("hay error en el Json")
      }

    }

  }

  armarCifrado() {
    this.cifrados.push({ id: this.getIncremental(), nombre: "Hermoso eres tu", nota: "A", cifradoText: hermoso_eres_tu });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Dios esta aqui", nota: "G", cifradoText: diosestaaqui });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Eres", nota: "", cifradoText: eres });
    this.cifrados.push({ id: this.getIncremental(), nombre: "El espiritu de Dios esta en este lugar", nota: "", cifradoText: elespiritudediosesta });
    this.cifrados.push({ id: this.getIncremental(), nombre: "En el nombre de Jesus", nota: "", cifradoText: en_el_nombre_de_jesus });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Algo esta cayendo aqui", nota: "", cifradoText: algoestacallendoaqui });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Hay momentos que las palabras", nota: "", cifradoText: haymomentosquelaspalabras });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Tu fidelidad", nota: "", cifradoText: tu_fidelidad });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Glorificate", nota: "", cifradoText: glorificate });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Temprano yo te buscaré", nota: "", cifradoText: temprano_yo_te_buscare });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Somos el pueblo de Dios", nota: "", cifradoText: somos_el_pueblo_de_dios });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Levantate Señor", nota: "", cifradoText: levantate_miel_san_marcos });
    this.cifrados.push({ id: this.getIncremental(), nombre: "La unica razon", nota: "", cifradoText: la_unica_razon });

    this.cifrados.push({ id: this.getIncremental(), nombre: "El santo de Israel", nota: "", cifradoText: el_santo_de_israel });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Libre", nota: "", cifradoText: libre });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Ya ha llegado el momento de", nota: "", cifradoText: ya_ha_llegado_el_momento_de });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Hay una uncion", nota: "", cifradoText: hay_una_uncion });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Yo quiero mas de ti", nota: "", cifradoText: yo_quiero_mas_de_ti });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Me gozare en tu presencia", nota: "", cifradoText: me_gozare_en_tu_presencia });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Soberano Dios", nota: "", cifradoText: soberano_dios });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Cuan bello es el señor", nota: "", cifradoText: cuan_bello_es_el_señor });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Abre mis ojos oh Cristo", nota: "", cifradoText: abre_mis_ojos_oh_cristo });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Celebrad a Cristo celebrad", nota: "", cifradoText: celebrad_a_cristo_celebrad });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Cristo no está muerto", nota: "", cifradoText: cristo_no_esta_muerto });
    this.cifrados.push({ id: this.getIncremental(), nombre: "El poderoso de Israel", nota: "", cifradoText: el_poderoso_de_israel });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Oh moradora de Sion", nota: "", cifradoText: oh_moradora });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Venid todos y celebrad", nota: "", cifradoText: venid_todos_y_celebrad });
    this.cifrados.push({ id: this.getIncremental(), nombre: "No hay lugar mas alto", nota: "", cifradoText: no_hay_lugar_mas_alto });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Entra en la presencia", nota: "", cifradoText: entra_en_la_presencia });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Bendito sea el Señor Dios poderoso", nota: "", cifradoText: bendito_sea_el_señor_dios_poderoso });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Bueno es alabarte Senor", nota: "", cifradoText: bueno_es_alabarte_senor });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Al que es digno", nota: "", cifradoText: al_que_es_digno });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Grandes son tus maravillas", nota: "", cifradoText: grandes_son_tus_maravillas });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Anciano de dias", nota: "", cifradoText: anciano_de_dias });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Al que me sine de poder", nota: "", cifradoText: al_que_me_sine  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Sueños", nota: "", cifradoText: sueños  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Dios de lo imposible", nota: "", cifradoText: dios_de_lo_imposible  });

    this.cifrados.push({ id: this.getIncremental(), nombre: "Eres señor vencedor", nota: "", cifradoText: eres_señor_vencedor  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Tal como soy", nota: "", cifradoText: tal_como_soy  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Eres el mas precioso", nota: "", cifradoText: eres_el_mas_precioso  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Recibe toda la gloria", nota: "", cifradoText: recibe_toda_la_gloria  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Mas el Dios de toda gracia", nota: "", cifradoText: mas_el_dios_de_toda_gracia  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Conozco que todo lo puedes", nota: "", cifradoText: conozco_que_todo_lo_puedes  });
    this.cifrados.push({ id: this.getIncremental(), nombre: "Yo quiero mas de ti", nota: "", cifradoText: yo_quiero_mas_de_ti  });






    





    //    this.cifrados.push({ id: this.getIncremental(), nombre: "", nota: "", cifradoText:  });
    localStorage.setItem('cifrado', JSON.stringify(this.cifrados));
  }

  getIncremental() {
    this.incremental = this.incremental + 1
    return `${this.incremental}`


  }
  getCifrados() {
    return this.cifrados;
  }

  filtrarCifrados(filtro: string) {
    let cifrados = this.cifrados.filter(s => s.nombre?.toLowerCase()?.includes(filtro.toLowerCase()))
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
