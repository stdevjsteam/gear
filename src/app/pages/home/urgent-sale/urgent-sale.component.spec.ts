import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentSaleComponent } from './urgent-sale.component';

describe('UrgentSaleComponent', () => {
  let component: UrgentSaleComponent;
  let fixture: ComponentFixture<UrgentSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
