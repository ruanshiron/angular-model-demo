import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { OrcComponent } from './orc/orc.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ModelService } from '../core/model.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';






@NgModule({
  declarations: [OrcComponent],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    PdfViewerModule,
    NgZorroAntdModule
  ],
  providers: [
    ModelService
  ]
})
export class ModelsModule { }
