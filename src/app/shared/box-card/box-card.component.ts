import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBoxCard } from '../models/box-card.model';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.css']
})
export class BoxCardComponent implements OnInit {

  @Input() boxCard: IBoxCard = null!;
  @Output() boxClick = new EventEmitter<IBoxCard>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("onClick() is invoked!", this.boxCard);
    this.boxClick.emit(this.boxCard);
  }
}
