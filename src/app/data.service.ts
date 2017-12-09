import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers_alpha = [];
  numbers_beta = [];
  sum = [0,0];

  constructor() { 
    
  }

  retrieveNumbers_alpha(): number[] {
    return this.numbers_alpha;
  }
  retrieveNumbers_beta(): number[] {
    return this.numbers_beta;
  }
  addNumber_alpha(){
    this.numbers_alpha.push(Math.floor(Math.random() * 10) + 1)
   
  }
  addNumber_bata(){
    this.numbers_beta.push(Math.floor(Math.random() * 10) + 1)
    console.log(this.numbers_beta)
  }
  
  difference(){
    
    for(let i=0; i < this.numbers_alpha.length; i++){
      this.sum[0] += this.numbers_alpha[i]
    }
    console.log(this.numbers_beta)
    for(let i=0; i < this.numbers_beta.length; i++){
      this.sum[1] +=  this.numbers_beta[i]
    }
    console.log(this.sum)

    console.log(this.sum[1] - this.sum[0])
    return this.sum[1] - this.sum[0];
  }

}
