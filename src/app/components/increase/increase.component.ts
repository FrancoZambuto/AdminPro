import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styles: [
  ]
})
export class IncreaseComponent implements OnInit {
 
 @Input() btnClass: string = 'btn-primary';
 @Input() progress: number = 50;
 @Output() outputValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  onChange(value: number) {
    if(value >= 100) {
      this.progress = 100;
    } else if (value <=0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.outputValue.emit(this.progress);
  }

  changeProgressValue(value: number) {
    if(this.progress >= 100 && value >= 0) {
      this.outputValue.emit(100);
      this.progress = 100;
      return
    }
    if(this.progress <= 0 && value <= 0) {
      this.outputValue.emit(0);
      this.progress = 0;
      return
    }
    this.progress = this.progress + value;
    this.outputValue.emit(this.progress);
  }
}
