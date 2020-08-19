import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})
export class Graphic1Component implements OnInit {

public labels1: string [] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public title1: string = "Sales";
public data1 = [
  [350, 450, 100]
];

  constructor() { }

  ngOnInit(): void {
  }

}
