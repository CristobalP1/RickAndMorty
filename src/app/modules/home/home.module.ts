import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CharacterModule } from '../character/character.module';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharacterModule,
    MatGridListModule
  ]
})
export class HomeModule { }
