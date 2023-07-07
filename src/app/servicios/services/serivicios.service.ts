import { Injectable } from '@angular/core';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
import { Servicio } from '../model/servicio.model';
import { CifradoService } from '@app/cifrados/services/cifrado.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  servicios = new Array<Servicio>()
  constructor(private cifradoService: CifradoService,) {
    if (null == localStorage.getItem('servicios')) {

      this.reiniciarServicios()

    } else {
      try {
        let cif = `${localStorage.getItem('servicios')}`
        this.servicios = JSON.parse(cif)
      } catch (error) {
        console.log("Hay errores en el Json de servicios")
      }

    }
  }

  reiniciarServicios() {
    this.servicios.push({ id: "1", nombre: "Servicio 01", fecha: "Hoy", descripcion: "Servicio....", cifrados: [] });
    this.servicios.push({ id: "2", nombre: "Servicio 02", fecha: "Mañana", descripcion: "Servicio....", cifrados: [] });

    localStorage.setItem('servicios', JSON.stringify(this.servicios));
  }

  getServicios() {
    return this.servicios;
  }

  getServicioById(id: string) {
    let s = this.servicios.filter((s, index) => {
      if (id == s.id) {
        return s
      } else {
        return
      }
    })
    if (undefined != s) {
      return s[0]
    } else {
      return { id: "", cifrados: [], descripcion: "", fecha: "", nombre: "" }
    }
  }

  createServicio(servicio: Servicio) {
    this.servicios.push(servicio);
    localStorage.setItem('servicios', JSON.stringify(this.servicios));
  }

  updateServicio(servicio: Servicio) {
    this.servicios.filter((s, index) => {
      if (servicio.id == s.id) {
        this.servicios[index] = servicio
      } else {
        return
      }
    })
    localStorage.setItem('servicios', JSON.stringify(this.servicios));
  }

  deleteServicio(servicio: Servicio) {
    this.servicios.filter((s, index) => {
      if (servicio.id == s.id) {
        this.servicios.splice(index, index)
      } else {
        return
      }
    })
    localStorage.setItem('servicios', JSON.stringify(this.servicios));
  }

  addCifradoToService(idServicio: any, idCifrado: any) {
    const cifrado: Cifrado = this.cifradoService.getCifrado(idCifrado)
    this.servicios.filter((s, index) => {
      if (idServicio == s.id) {

        this.servicios[index].cifrados.push(cifrado)

      } else {
        return
      }
    })

    localStorage.setItem('servicios', JSON.stringify(this.servicios));
  }

  deleteCifradoToService(idServicio: any, idCifrado: any) {
    // const cifrado = this.cifradoService.getCifrado(idCifrado)

    this.servicios.filter((s, index) => {
      if (idServicio == s.id) {
        this.servicios[index].cifrados.filter((s2, index2) => {
          if (idCifrado == s2.id) {
            this.servicios[index].cifrados.splice(index2, 1)
          }
        })
      } else {
        return
      }
    })

    localStorage.setItem('servicios', JSON.stringify(this.servicios));
  }


}
