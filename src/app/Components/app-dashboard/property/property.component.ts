import { Component, OnInit, Input } from '@angular/core';
import { property } from '../../../Models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: property;
  constructor() { }

  ngOnInit() {
  }

}
