import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { property } from '../../../Models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: property;
  @Output() sendPropertyId = new EventEmitter<property>();
  constructor() { }

  ngOnInit() {
  }

  private bookProperty(property: property) {
    this.sendPropertyId.emit(property);
  }

}
