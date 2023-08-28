import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { SepararSeriePipe } from './pipes/split/season/separar-serie.pipe';
import { SepararEpisodePipe } from './pipes/split/episode/separar-episode.pipe';



@NgModule({
  declarations: [
    PagerComponent,
    DateFormatPipe,
    SepararSeriePipe,
    SepararEpisodePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagerComponent,
    DateFormatPipe,
    SepararSeriePipe,
    SepararEpisodePipe
  ]
})
export class SharedModule { }
