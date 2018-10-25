import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePreloaderComponent } from './page-preloader.component';

describe('PagePreloaderComponent', () => {
  let component: PagePreloaderComponent;
  let fixture: ComponentFixture<PagePreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
