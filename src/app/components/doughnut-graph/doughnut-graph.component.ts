import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styles: [
  ]
})
export class DoughnutGraphComponent implements OnInit {

  @Input() title: string;

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[];
  @Input('data') doughnutChartData: MultiDataSet;

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
