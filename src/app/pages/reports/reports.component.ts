import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor() is invoked!")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges() is invoked!")
  }

  ngOnInit(): void {
    console.log("ngOnInit() is invoked!")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck() is invoked!")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() is invoked!")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() is invoked!")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() is invoked!")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() is invoked!")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() is invoked!")
  }
}
