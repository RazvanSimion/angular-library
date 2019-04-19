import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrcLibComponent } from './ng-trc-lib.component';

describe('NgTrcLibComponent', () => {
  let component: NgTrcLibComponent;
  let fixture: ComponentFixture<NgTrcLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTrcLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTrcLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
