import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialsDemoComponent } from './partials-demo.component';

describe('PartialsDemoComponent', () => {
  let component: PartialsDemoComponent;
  let fixture: ComponentFixture<PartialsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
