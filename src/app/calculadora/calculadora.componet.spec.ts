import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';

describe('NumeroComplejo formula', () => {
  let fixture: ComponentFixture<CalculadoraComponent>;
  let component: CalculadoraComponent;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
      declarations: [
        CalculadoraComponent
      ],
      }).compileComponents();
  });

  beforeEach(() => {
      fixture = TestBed.createComponent(CalculadoraComponent);
      fixture.detectChanges();
      component = fixture.componentInstance;
  });

  it('Deberá crear un form con 4 controls', () => {
      expect(component.calculadoraForm.contains('real1')).toBeTruthy();
      expect(component.calculadoraForm.contains('real2')).toBeTruthy();
      expect(component.calculadoraForm.contains('img1')).toBeTruthy();
      expect(component.calculadoraForm.contains('img2')).toBeTruthy();
  });

  it('Deberá requerir los 4 controls', () => {
      let control1 : any; let control2 : any; let control3 : any; let control4 : any;

      control1 = component.calculadoraForm.get('real1');
      control1.setValue('');
      expect(control1.valid).toBeFalsy();

      control2 = component.calculadoraForm.get('real2');
      control2.setValue('');
      expect(control2.valid).toBeFalsy();

      control3 = component.calculadoraForm.get('img1');
      control3.setValue('');
      expect(control2.valid).toBeFalsy();

      control4 = component.calculadoraForm.get('img2');
      control4.setValue('');
      expect(control4.valid).toBeFalsy();
  });

  it('Deberá retornar i positiva si el resultado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('2');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('-3');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('5');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('4');
    resultado = component.suma();

    expect(resultado).toEqual('7 + 1 i');
  });

  it('Deberá retornar "7 + i" si el resutlado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('2');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('-10');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('5');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('4');
    resultado = component.suma();

    expect(resultado).toEqual('7 -6 i');
  });

  it('Deberá retornar "-3-7i" si el resultado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('2');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('-3');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('5');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('4');
    resultado = component.resta();

    expect(resultado).toEqual('-3 -7 i');
  });

  it('Deberá retornar "-3-7i" si el resultado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('6');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('10');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('5');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('4');
    resultado = component.resta();

    expect(resultado).toEqual('1 + 6 i');
  });

  it('Deberá retornar "2+6i" si el resutlado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('2');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('1');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('2');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('2');
    resultado = component.multiplicacion();

    expect(resultado).toEqual('2 + 6 i');
  });

  it('Deberá retornar "2+6i" si el resutlado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('2');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('-1');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('2');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('-2');
    resultado = component.multiplicacion();

    expect(resultado).toEqual('2 -6 i');
  });

  it('Deberá retornar "7/5 - 11/5i" si el resutlado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('5');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('-3');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('2');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('1');
    resultado = component.division();

    expect(resultado).toEqual('1.4 -2.2 i');
  });

  it('Deberá retornar "5.8 + 0.4 i" si el resutlado es correcto', () => {
    let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
    let resultado : any;

    control_1 = component.calculadoraForm.get('real1');
    control_1.setValue('10');
    control_2 = component.calculadoraForm.get('img1');
    control_2.setValue('24');
    control_3 = component.calculadoraForm.get('real2');
    control_3.setValue('2');
    control_4 = component.calculadoraForm.get('img2');
    control_4.setValue('4');
    resultado = component.division();

    expect(resultado).toEqual('5.8 + 0.4 i');
  });

  it('Deberá retornar la palabra suma', () => {
    let resultado : any;
    resultado = component.onSubmit('suma');

    expect(resultado).toEqual('suma');
  });

  it('Deberá retornar la palabra resta', () => {
    let resultado : any;
    resultado = component.onSubmit('resta');

    expect(resultado).toEqual('resta');
  });

  it('Deberá retornar la palabra multiplicaion', () => {
    let resultado : any;
    resultado = component.onSubmit('mult');

    expect(resultado).toEqual('multiplicacion');
  });

  it('Deberá retornar la palabra division', () => {
    let resultado : any;
    resultado = component.onSubmit('div');

    expect(resultado).toEqual('division');
  });

  it('Deberá retornar "no se pudo realizar', () => {
    let resultado : any;
    resultado = component.onSubmit('');

    expect(resultado).toEqual('no se pudo realizar');
  });
})
