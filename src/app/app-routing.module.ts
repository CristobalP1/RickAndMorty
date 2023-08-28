import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./modules/character/character.module').then((m) => m.CharacterModule),
  },
  {
    path: 'location',
    loadChildren: () =>
      import('./modules/location/location.module').then((m) => m.LocationModule),
  },
  {
    path: 'episode',
    loadChildren: () =>
      import('./modules/episode/episode.module').then((m) => m.EpisodeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
