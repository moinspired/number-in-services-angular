import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numbers = [];

  constructor(private _dataService: DataService) { }
  
  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers_alpha();
  }

  difference() {
    this._dataService.difference()
  }
  
}
