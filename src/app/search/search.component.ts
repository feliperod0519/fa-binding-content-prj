import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput : FormControl = new FormControl('');

  constructor(private state: StateService) { 
    this.searchInput.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(value=>{
                          this.state.searchCriteria = value;
                       });
  }

  ngOnInit(): void {
  }

}
