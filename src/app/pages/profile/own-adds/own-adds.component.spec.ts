import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnAddsComponent } from './own-adds.component';

describe('OwnAddsComponent', () => {
  let component: OwnAddsComponent;
  let fixture: ComponentFixture<OwnAddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnAddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
