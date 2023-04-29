import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { CifradoService } from '@app/cifrados/services/cifrado.service';
import { ServiciosService } from '@app/servicios/services/serivicios.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService,
        private cifradosService:CifradoService ,
        private servicioService:ServiciosService) {
        this.user = this.accountService.userValue;
    }
    reiniciarTodo(){
     
      
        localStorage.removeItem("servicios")
        localStorage.removeItem("cifrado")
        window.location.reload()
    }
}