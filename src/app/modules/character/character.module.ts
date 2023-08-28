import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterServiceRepository } from '../../ddd/character/infrastructure/CharacterServiceRepository';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CharacterSingleModule } from '../character-single/character-single.module';



@NgModule({
  declarations: [
    CharacterComponent,
    
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    CharacterRoutingModule,
    SharedModule,
    CharacterSingleModule
  ],
  exports:[
    CharacterComponent
  ],
  providers:[
    CharacterServiceRepository
  ]
})
export class CharacterModule { }
