import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {  MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
import { CifradoComponent } from '../cifrado/cifrado.component';
@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.less']
})
export class MytableComponent implements OnInit {


  @Input() cifrados: Array<Cifrado> = [];
  @Input() mostrar: boolean = false;
  @Input() agregarEnServicio: boolean = false;
  @Input() eliminarEnServicio: boolean = false;
  busqueda:string=""


  @Output() onAgregar: EventEmitter<string> = new EventEmitter();
  @Output() onEliminar: EventEmitter<string> = new EventEmitter();

  columnas: string[] = ['id', 'nombre', 'nota', 'accion'];

  @Input() dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(  public dialog: MatDialog) {
   
   }

  ngOnInit(): void {
    this.update()
  }

  agregarAServicio(id: string) {
    this.onAgregar.emit(id)
    console.log("actualizando tabla")
    this.update()
  }

  eliminarAServicio(id: string) {
    this.onEliminar.emit(id)
    this.update()
  }

  update() {
    this.dataSource = new MatTableDataSource<Cifrado>(this.cifrados);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(cifrado:Cifrado){
    console.log(cifrado)
    const dialogRef = this.dialog.open(CifradoComponent, {

      data: { cifrado:cifrado }
    });
  }
}