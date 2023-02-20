import { Injectable } from '@angular/core';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
import { Servicio } from '../model/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  servicios = new Array<Servicio>()
  constructor() {
    if (null == localStorage.getItem('servicios')) {
      this.servicios.push({ id: "1", nombre: "Servicio deprueba", fecha: "Hoy", descripcion: "Servicio....", cifrados: [] });
      localStorage.setItem('servicios', JSON.stringify(this.servicios));
    } else {
      let cif = `${localStorage.getItem('servicios')}`
      this.servicios = JSON.parse(cif)
    }
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




}
