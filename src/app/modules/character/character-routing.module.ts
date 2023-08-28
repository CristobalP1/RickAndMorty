import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';
import { CharacterSingleComponent } from '../character-single/character-single.component';

const routes: Routes = [
  {path:'',component:CharacterComponent},
  {path:':id',component:CharacterSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}
