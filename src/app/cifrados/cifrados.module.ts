import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { LayoutComponent } from './layout/layout.component';
import { CifradoRoutingModule } from './cifrados-routing.module';
import { RemovePipePipe } from './services/removePipe';





@NgModule({
  declarations: [
    ListComponent,
    ShowComponent,
    LayoutComponent,
    RemovePipePipe

  ],
  imports: [
    CommonModule,CifradoRoutingModule
  ]
  ,exports:[
    
  ]
})
export class CifradosModule { }
