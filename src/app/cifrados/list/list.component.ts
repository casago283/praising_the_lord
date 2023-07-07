import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Cifrado } from '../model/cifrado.interface';
import { CifradoService } from '../services/cifrado.service';
import { ServiciosService } from '@app/servicios/services/serivicios.service';
import { ShowComponent } from '../show/show.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../common/cifrado/cifrado.component';
import { MytableComponent } from '../common/mytable/mytable.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
 
  cifrados: Array<Cifrado> = []
  cifradosAsignados: Array<Cifrado> = []
  filtro: string = ""

  @ViewChild(MytableComponent, { static: false })
  tabla!: MytableComponent;


  constructor(
    private cifradoService: CifradoService,

   ) { 
    this.cifrados =cifradoService.getCifrados()
  }

  ngOnInit(): void {
    console.log("")
  }

  alFiltrar() {
console.log("test")
    this.cifrados = this.cifradoService.filtrarCifrados(this.filtro)
    this.tabla.cifrados = this.cifrados
    this.tabla.update()
    console.log(this.cifrados)
  }

}
