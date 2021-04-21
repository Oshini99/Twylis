import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwReportComponent } from './tw-report.component';

describe('TwReportComponent', () => {
  let component: TwReportComponent;
  let fixture: ComponentFixture<TwReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
