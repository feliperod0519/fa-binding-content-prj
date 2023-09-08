import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { faFilm, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { PriceQuote } from './common/priceQuote'
import {ChildComponent} from './child/child.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  filmIcon = faFilm;
  coffeeIcon = faCoffee

  stock: string='';
  quantity: number=100;

  priceQuote: PriceQuote = { 'stockSymbol':'' , 'lastPrice':0 } as PriceQuote;

  todaysDate = new Date().toLocaleDateString();

  @ViewChild('child1', { static: true })
  firstChild: ChildComponent= {} as ChildComponent;  // reference to one child

  @ViewChildren(ChildComponent)
  allChildren: QueryList<ChildComponent> = {} as QueryList<ChildComponent>; // reference to all instances of ChildComponent

  btnClicked($event: Event){
    console.log($event)
  }

  onChangeEvent(event:Event):void{
    console.log((event.target as HTMLInputElement).value)
    this.stock = (event.target as HTMLInputElement).value;
  }

  priceQuoteHandler(event:PriceQuote):void{
    console.log(event)
    this.priceQuote = event;
  }

  ngAfterViewInit() {
    this.firstChild.greet();
  }

  greetAllChildren(){
     this.allChildren.forEach(child => child.greet());
  }

}

