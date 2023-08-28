import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeSingleComponent } from './episode-single.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    EpisodeSingleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EpisodeSingleModule { }
