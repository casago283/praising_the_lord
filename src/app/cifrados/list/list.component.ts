import { Component, OnInit } from '@angular/core';
import { Cifrado } from '../cifrado.interface';
import { CifradoService } from '../services/cifrado.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  cifrados =new Array<Cifrado>();

  constructor(private cifrado:CifradoService ) { 
    this.cifrados =cifrado.getCifrados()
  }

  ngOnInit(): void {
    console.log("")
  }

}
