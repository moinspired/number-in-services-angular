import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) { }
  

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers_beta();
  }

  pushRandomBeta(){
    this._dataService.addNumber_bata();
    console.log("calling push beta")
  }
}
