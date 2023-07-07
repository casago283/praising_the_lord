import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiciosRoutingModule } from './servicios-routing.module';
import { MaterialModule } from '@app/material/material.module';
import { CifradosModule } from '@app/cifrados/cifrados.module';
import { AddcifradoComponent } from './addcifrado/addcifrado.component';



@NgModule({
  declarations: [
    AddComponent,
    ShowComponent,
    ListComponent,
    LayoutComponent,
    AddcifradoComponent
  ],
  imports: [
    CommonModule,ServiciosRoutingModule,MaterialModule,CifradosModule
  ]
})
export class ServiciosModule { }
