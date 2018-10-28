import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVehiclesComponent } from './top-vehicles.component';

describe('TopVehiclesComponent', () => {
  let component: TopVehiclesComponent;
  let fixture: ComponentFixture<TopVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
