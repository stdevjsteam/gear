import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListedComponent } from './filter-listed.component';

describe('FilterListedComponent', () => {
  let component: FilterListedComponent;
  let fixture: ComponentFixture<FilterListedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterListedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
