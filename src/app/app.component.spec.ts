import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it(`should have as title 'extraordinario'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('extraordinario');
  });

  it('Deberá tener escrito "Pruebas de software" en el h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.innerHTML).not.toBeNull();
    expect(h1.textContent).toContain('Pruebas de software');
  });

  it('Debe tener contenido en el header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const content = fixture.debugElement.query(By.css('header')).nativeElement;
    expect(content.innerHTML).not.toBeNull();
    expect(content.innerHTML.length).toBeGreaterThan(0);
  });

  it('Debe tener contenido en los section', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const content = fixture.debugElement.query(By.css('section')).nativeElement;
    expect(content.innerHTML).not.toBeNull();
    expect(content.innerHTML.length).toBeGreaterThan(0);
  });

  it('Debe tener contenido en el footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const content = fixture.debugElement.query(By.css('footer')).nativeElement;
    expect(content.innerHTML).not.toBeNull();
    expect(content.innerHTML.length).toBeGreaterThan(0);
  });
});
