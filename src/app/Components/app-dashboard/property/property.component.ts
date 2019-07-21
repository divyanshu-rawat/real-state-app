import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { property } from '../../../Models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: property;
  @Input() hidden: boolean;
  @Output() bookProperty = new EventEmitter<property>();
  @Output() viewProperty = new EventEmitter<property>();
  constructor() { }

  ngOnInit() {
  }

  private bookPropertyEvent(property: property) {
    this.bookProperty.emit(property);
  }
  private viewPropertyEvent(property: property) {
    this.viewProperty.emit(property);
  }

}
