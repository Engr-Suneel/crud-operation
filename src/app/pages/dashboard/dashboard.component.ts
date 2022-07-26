import { Component, OnInit } from '@angular/core';
import { IBoxCard } from 'src/app/shared/models/box-card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boxCardList: Array<IBoxCard> = []
  constructor() { }

  ngOnInit(): void {
    this.boxCardList = [
      {
        bgColor: "bg-1",
        boxIcon: "bi bi-people",
        boxTitle: "Vistors",
        boxCount: 1290
      },
      {
        bgColor: "bg-2",
        boxIcon: "bi bi-bar-chart",
        boxTitle: "Sales",
        boxCount: 1345
      },
      {
        bgColor: "bg-3",
        boxIcon: "bi bi-layout-text-sidebar",
        boxTitle: "Subscriber",
        boxCount: 1305
      },
      {
        bgColor: "bg-4",
        boxIcon: "bi bi-check2-circle",
        boxTitle: "Order",
        boxCount: 576
      }
    ]
  }

}
