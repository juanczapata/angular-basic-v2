import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-container',
  templateUrl: './central-container.component.html',
  styleUrls: ['./central-container.component.css']
})
export class CentralContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getFreshScore(index: number) {
    console.log('selected tab with index: ' + index);
    }

}
