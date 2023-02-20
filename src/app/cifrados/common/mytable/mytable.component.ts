import { Component, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cifrado } from '@app/cifrados/model/cifrado.interface';
@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.less']
})
export class MytableComponent implements OnInit {


  @Input() cifrados: Array<Cifrado> = [];
  @Input() mostrar: boolean = false;
  @Input() agregar: boolean = false;



  @Output() onAgregar: EventEmitter<string> = new EventEmitter();

  columnas: string[] = ['id', 'nombre', 'nota', 'accion'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.update()
  }

  agregarAServicio(id: string) {
    this.onAgregar.emit(id)
  }

  update() {
    this.dataSource = new MatTableDataSource<Cifrado>(this.cifrados);
    this.dataSource.paginator = this.paginator;
  }
}