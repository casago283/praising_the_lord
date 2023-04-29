import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { LayoutComponent } from './layout/layout.component';
import { CifradoRoutingModule } from './cifrados-routing.module';
import { RemovePipePipe } from './services/removePipe';
import { MytableComponent } from './common/mytable/mytable.component';
import { MaterialModule } from '@app/material/material.module';
import { InputComponent } from './common/input/input.component';
import { CifradoComponent } from './common/cifrado/cifrado.component';





@NgModule({
  declarations: [
    ListComponent,
    ShowComponent,
    LayoutComponent,
    RemovePipePipe,
    MytableComponent,
    InputComponent,

    CifradoComponent,
    


  ],
  imports: [
    CommonModule,CifradoRoutingModule,MaterialModule
  ]
  ,exports:[
    MytableComponent
  ]
})
export class CifradosModule { }
