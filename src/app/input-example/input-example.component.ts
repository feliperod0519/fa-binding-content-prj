import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.css']
})
export class InputExampleComponent implements OnInit {

  private _stk:string='';

  @Input()set stk(value:string){
    if (value!==undefined)
    {
      this._stk = value;
      console.log(`${this.qty} of ${this._stk}`)
    }
  }
  get stk():string{
    return this._stk;
  }

  @Input()qty:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
