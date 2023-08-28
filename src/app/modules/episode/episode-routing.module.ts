import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './episode.component';
import { EpisodeSingleComponent } from '../episode-single/episode-single.component';

const routes: Routes = [
{path:'',component:EpisodeComponent},
{path:':id',component:EpisodeSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeRoutingModule {}
