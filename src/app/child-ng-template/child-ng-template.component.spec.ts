import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgTemplateComponent } from './child-ng-template.component';

describe('ChildNgTemplateComponent', () => {
  let component: ChildNgTemplateComponent;
  let fixture: ComponentFixture<ChildNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
