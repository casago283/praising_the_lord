import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MytableComponent } from '@app/cifrados/common/mytable/mytable.component';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
import { AddcifradoComponent } from '../addcifrado/addcifrado.component';
import { Servicio } from '../model/servicio.model';
import { ServiciosService } from '../services/serivicios.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.less']
})
export class ShowComponent implements OnInit, OnChanges {
  id: string;
  servicio: Servicio;
  @ViewChild(MytableComponent, { static: false }) tabla!: MytableComponent;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private servicioService: ServiciosService,
    public dialog: MatDialog) {
    this.id = ""
    this.servicio = { id: "", cifrados: [], descripcion: "", fecha: "", nombre: "" }

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.servicio = this.servicioService.getServicioById(id)
    console.log("pasando por init")
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddcifradoComponent, {
      data: { id: this.servicio.id, servicio: this.servicio.nombre, busqueda: "", cifrados: this.servicio.cifrados }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servicio.cifrados = result.cifrados
        this.tabla.update()
      }
    });
  }
  ngOnChanges() {
  
  }
}
