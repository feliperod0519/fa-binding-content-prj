import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgTemplateSelectorComponent } from './child-ng-template-selector.component';

describe('ChildNgTemplateSelectorComponent', () => {
  let component: ChildNgTemplateSelectorComponent;
  let fixture: ComponentFixture<ChildNgTemplateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgTemplateSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNgTemplateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
