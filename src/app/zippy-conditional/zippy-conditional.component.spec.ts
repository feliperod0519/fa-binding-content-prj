import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyConditionalComponent } from './zippy-conditional.component';

describe('ZippyConditionalComponent', () => {
  let component: ZippyConditionalComponent;
  let fixture: ComponentFixture<ZippyConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZippyConditionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZippyConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
