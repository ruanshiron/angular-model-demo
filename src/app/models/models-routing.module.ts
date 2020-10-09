import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrcComponent } from './orc/orc.component';

const routes: Routes = [
  { path: 'orc', component: OrcComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsRoutingModule { }
