import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< Updated upstream
  it(`should have as title 'Header'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Header');
=======
  it(`should have as title 'Loginpage'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Loginpage');
>>>>>>> Stashed changes
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
<<<<<<< Updated upstream
    expect(compiled.querySelector('.content span').textContent).toContain('Header App is running!');
=======
    expect(compiled.querySelector('.content span').textContent).toContain('Loginpage is running!');
>>>>>>> Stashed changes
  });
});
