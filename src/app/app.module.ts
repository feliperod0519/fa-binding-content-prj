import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputrefDirective } from './common/inputref.directive';
import { AuFaInputComponent } from './au-fa-input/au-fa-input.component';
import { FancyBtnComponent } from './fancy-btn/fancy-btn.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyConditionalComponent } from './zippy-conditional/zippy-conditional.component';
import { ExampleZippyDirective } from './zippy-conditional/example-zippy.directive';
import { InputExampleComponent } from './input-example/input-example.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';
import { SearchComponent } from './search/search.component';
import { EbayComponent } from './ebay/ebay.component';
import { AmazonComponent } from './amazon/amazon.component';
import { ChildComponent } from './child/child.component';
import { ChildNgTemplateComponent } from './child-ng-template/child-ng-template.component';
import { ChildNgTemplateSelectorComponent } from './child-ng-template-selector/child-ng-template-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    InputrefDirective,
    AuFaInputComponent,
    FancyBtnComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyConditionalComponent,
    ExampleZippyDirective,
    InputExampleComponent,
    PriceQuoterComponent,
    SearchComponent,
    EbayComponent,
    AmazonComponent,
    ChildComponent,
    ChildNgTemplateComponent,
    ChildNgTemplateSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
