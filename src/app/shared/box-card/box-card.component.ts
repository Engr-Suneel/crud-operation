import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IBoxCard } from '../models/box-card.model';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.css']
})
export class BoxCardComponent implements OnInit, OnChanges {

  @Input() boxCard: IBoxCard = null!;
  @Output() boxClick = new EventEmitter<IBoxCard>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('boxCard' in changes && this.boxCard.boxCount > 1300) {
      console.log("Yes");
    }
  }

  ngOnInit(): void {

  }

  onClick() {
    console.log("onClick() is invoked!", this.boxCard);
    this.boxClick.emit(this.boxCard);
  }
}
