import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
})
export class ToolbarComponent {
  constructor(
    private router: Router,
  ) {};

goBack():void {
  this.router.navigateByUrl('/home');
}

openLocation():void{
  this.router.navigateByUrl('/location');
}

openCharacter():void{
  this.router.navigateByUrl('/character');
}
openEpisodes():void{
  this.router.navigateByUrl('/episode');
}
}
