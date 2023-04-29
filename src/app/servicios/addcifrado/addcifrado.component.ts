import { Component, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
import { CifradoService } from '@app/cifrados/services/cifrado.service';
import { ShowComponent } from '@app/cifrados/show/show.component';
import { ServiciosService } from '../services/serivicios.service';
import { MytableComponent } from '@app/cifrados/common/mytable/mytable.component';

export interface DialogData {
  id: string;
  busqueda: string;
  servicio: string;
  cifrados: Array<Cifrado>
}
@Component({
  selector: 'app-addcifrado',
  templateUrl: './addcifrado.component.html',
  styleUrls: ['./addcifrado.component.less']
})
export class AddcifradoComponent implements OnInit {


  cifrados: Array<Cifrado> = []
  cifradosAsignados: Array<Cifrado> = []
  filtro: string = ""

  @ViewChild(MytableComponent, { static: false })
  tabla!: MytableComponent;

  constructor(
    private cifradoService: CifradoService,
    private servicioService: ServiciosService,
    public dialogRef: MatDialogRef<ShowComponent>,

    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }


  ngOnInit(): void {
    this.cifrados = this.cifradoService.getCifrados()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  alFiltrar() {

    this.cifrados = this.cifradoService.filtrarCifrados(this.filtro)
    this.tabla.cifrados = this.cifrados
    this.tabla.update()
    console.log(this.cifrados)
  }

  agregarCifradoAServicio(id: string) {
    console.log(`agregando ...${id}`)
    this.cifrados.filter((cifrado) => {
      if (`${cifrado.id}` == id) {
        //  this.data.cifrados.push(cifrado)
        this.servicioService.addCifradoToService(this.data.id, cifrado.id)
      }

    })
  }

  eliminarCifradoAServicio(id: string) {
    this.cifrados.filter((cifrado) => {
      if (`${cifrado.id}` == id) {
        //  this.data.cifrados.push(cifrado)
        this.servicioService.deleteCifradoToService(this.data.id, cifrado.id)
      }

    })

  }

}

