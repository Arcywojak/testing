import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-square',
  templateUrl: './static-square.component.html',
  styleUrls: ['./static-square.component.scss']
})
export class StaticSquareComponent implements OnInit {

  constructor() {console.log("I RENDEEr") }

  ngOnInit(): void {
  }

}
