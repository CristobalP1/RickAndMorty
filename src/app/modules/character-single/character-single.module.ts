import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSingleComponent } from './character-single.component';
import { SharedModule } from '../../shared/shared.module';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { EpisodeServiceRepository } from '../../ddd/episode/infrastructure/EpisodeServiceRepository';

@NgModule({
  declarations: [
    CharacterSingleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    EpisodeServiceRepository
  ]
})
export class CharacterSingleModule { }
