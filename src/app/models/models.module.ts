import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelComponent } from './model/model.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputAreaComponent } from './components/input-area/input-area.component';
import { OnputAreaComponent } from './components/onput-area/onput-area.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';






@NgModule({
  declarations: [ModelComponent, InputAreaComponent, OnputAreaComponent],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    FontAwesomeModule,
    NzTypographyModule,
    FormsModule,
    NzIconModule,
    NzDividerModule
  ]
})
export class ModelsModule { }
