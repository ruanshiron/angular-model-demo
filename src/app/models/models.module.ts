import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelComponent } from './model/model.component';


@NgModule({
  declarations: [ModelComponent],
  imports: [
    CommonModule,
    ModelsRoutingModule
  ]
})
export class ModelsModule { }
