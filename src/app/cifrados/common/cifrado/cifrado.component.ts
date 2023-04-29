import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
import { CifradoService } from '@app/cifrados/services/cifrado.service';

export interface DialogData {
  cifrado:Cifrado
}

@Component({
  selector: 'app-cifrado',
  templateUrl: './cifrado.component.html',
  styleUrls: ['./cifrado.component.less']
})
export class CifradoComponent implements OnInit {

  @Input()
  cifrado!: Cifrado;
  constructor(private cifradosService: CifradoService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
      this.cifrado= data.cifrado
   }

  ngOnInit(): void {
  }

  subirNota() {
    this.cifrado=this.cifradosService.subirMedioTono(this.cifrado)
    console.log("subiendo nota")

  }
  bajarNota(){
    this.cifrado=this.cifradosService.bajarMedioTono(this.cifrado)
    console.log("bajando nota")
  }

}
