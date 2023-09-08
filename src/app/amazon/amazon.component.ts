import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, of} from 'rxjs';
import { StateService } from '../services/state.service'

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit, OnDestroy {

  searchFor: string = '';
  subscription: Subscription = of().subscribe();

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.subscription = this.state.getState()
      .subscribe(event => this.searchFor = event);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
