import { Component, OnInit } from '@angular/core';
import { Servicio } from '../model/servicio.model';
import { ServiciosService } from '../services/serivicios.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  servicios =new Array<Servicio>();
  constructor(ss:ServiciosService) { 

  this.servicios=ss.getServicios()
  }

  ngOnInit(): void {
  }

}
