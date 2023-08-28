import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {

  @Input() finalPage: number = 1;
  @Input() pageInicial: number = 1;

  @Output() currentNow: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() pageCurrentNow: EventEmitter<number> = new EventEmitter<number>();

  pageCurrent:number = 1;

  constructor(){}

  changePage(page:number):void{
    this.pageCurrent += page;
    this.pageCurrentNow.emit(this.pageCurrent);
  }

  spacePage(page:number):void{
    this.pageCurrent = page;
    this.pageCurrentNow.emit(this.pageCurrent);

  }


}
