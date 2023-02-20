import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
import { CifradoService } from '@app/cifrados/services/cifrado.service';
import { ShowComponent } from '@app/cifrados/show/show.component';

export interface DialogData {
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

  constructor(
    private cifradoService: CifradoService,
    public dialogRef: MatDialogRef<ShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    this.cifrados = this.cifradoService.getCifrados()
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  agregarCifradoAServicio(id: string) {
    console.log(`agregando ...${id}`)
    this.cifrados.filter((cifrado) => {
      if (`${cifrado.id}` == id) {
        this.data.cifrados.push(cifrado)
      }
    })
  }

}

