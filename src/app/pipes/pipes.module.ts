import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCompletePipe } from './filtro-complete.pipe';



@NgModule({
  declarations: [FiltroCompletePipe],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroCompletePipe
  ]
})
export class PipesModule { }
