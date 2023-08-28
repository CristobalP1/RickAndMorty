import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './episode.component';
import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeServiceRepository } from '../../ddd/episode/infrastructure/EpisodeServiceRepository';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../shared/shared.module';
import { EpisodeSingleModule } from '../episode-single/episode-single.module';



@NgModule({
  declarations: [
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    MatProgressSpinnerModule,
    SharedModule,
    EpisodeSingleModule
  ],
  providers: [
    EpisodeServiceRepository
  ],
})
export class EpisodeModule { }
