import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataInTemplateUrlComponent } from './display-data-in-template-url.component';

describe('DisplayDataInTemplateUrlComponent', () => {
  let component: DisplayDataInTemplateUrlComponent;
  let fixture: ComponentFixture<DisplayDataInTemplateUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDataInTemplateUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataInTemplateUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
