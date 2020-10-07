import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelComponent } from './model/model.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ModelService } from '../core/model.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';






@NgModule({
  declarations: [ModelComponent],
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
    NzDividerModule,
    NzUploadModule,
    NzMessageModule,
    PdfViewerModule,
    NzToolTipModule
  ],
  providers: [
    ModelService
  ]
})
export class ModelsModule { }
