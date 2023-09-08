import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceQuote } from '../common/priceQuote'
import {Observable, interval, pipe} from 'rxjs'


@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent implements OnInit {

  @Output() lastPrice= new EventEmitter<PriceQuote>();
  priceQuote: PriceQuote = { 'stockSymbol':'' , 'lastPrice':0 } as PriceQuote;

  constructor() {
    interval(2000).subscribe(d=>{
      this.priceQuote= { 'stockSymbol': 'IBM', 'lastPrice': 100 * Math.random()} as PriceQuote;
      this.lastPrice.emit(this.priceQuote);
    });
    
    
  }

  ngOnInit(): void {
  }

}
