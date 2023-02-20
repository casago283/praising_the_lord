import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cifrado } from '../model/cifrado.interface';
import { CifradoService } from '../services/cifrado.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.less']
})
export class ShowComponent implements OnInit {
  id: string
  cifrado: Cifrado;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cifrados: CifradoService) { 
      this.cifrado={id:"",nombre:"",nota:"",cifradoText:""}
      this.id=""

    }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.cifrado = this.cifrados.getCifrado(id);
  
  }

  subirNota() {
    this.cifrado=this.cifrados.subirMedioTono(this.cifrado)
    console.log("subiendo nota")

  }
  bajarNota(){
    this.cifrado=this.cifrados.bajarMedioTono(this.cifrado)

    console.log("bajando nota")
  }
}
