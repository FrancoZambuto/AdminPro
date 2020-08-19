import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaseComponent } from './increase/increase.component';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';



@NgModule({
  declarations: [
    IncreaseComponent,
    DoughnutGraphComponent
  ],
  exports: [
    IncreaseComponent, 
    DoughnutGraphComponent
          ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
