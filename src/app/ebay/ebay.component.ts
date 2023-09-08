import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs'
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-ebay',
  templateUrl: './ebay.component.html',
  styleUrls: ['./ebay.component.css']
})
export class EbayComponent implements OnInit {

  searchFor$ : Observable<string> = of('')

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.searchFor$ = this.state.getState();
  }

}
