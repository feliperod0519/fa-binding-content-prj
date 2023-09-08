import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy-conditional',
  templateUrl: './zippy-conditional.component.html',
  styleUrls: ['./zippy-conditional.component.css']
})
export class ZippyConditionalComponent implements OnInit {

  expanded= true; 

  constructor() {
  }

  ngOnInit(): void {
  }

}
