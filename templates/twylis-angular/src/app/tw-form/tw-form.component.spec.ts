import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwFormComponent } from './tw-form.component';

describe('TwFormComponent', () => {
  let component: TwFormComponent;
  let fixture: ComponentFixture<TwFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
