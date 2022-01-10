import { NumeroComplejo } from './complejo';

describe('NumeroComplejo formula', () => {
  let formula: NumeroComplejo;

  it('El numero real debe ser igual a 10', () => {
    formula = new NumeroComplejo(10, 0);
    expect(formula.real).toEqual(10);
  });

  it('El numero imaginario debe ser igual a 3', () => {
    formula = new NumeroComplejo(0, 3);
    expect(formula.imaginario).toEqual(3);
  });

  it('La operación (2-3i) + (5+4i) debe ser igual a 7 + i', () => {
    let numero1 = new NumeroComplejo(2, -3);
    let numero2 = new NumeroComplejo(5, 4);

    let operacion = numero1.suma(numero2);

    expect(operacion.real).toBe(7);
    expect(operacion.imaginario).toBe(1);
  });

  it('La operación (2-3i) - (5+4i) debe ser igual a -3-7i', () => {
    let numero1 = new NumeroComplejo(2, -3);
    let numero2 = new NumeroComplejo(5, 4);

    let operacion = numero1.resta(numero2);

    expect(operacion.real).toBe(-3);
    expect(operacion.imaginario).toBe(-7);
  });

  it('La operación (2+i)(2+2i) debe ser igual a 2+6i', () => {
    let numero1 = new NumeroComplejo(2, 1);
    let numero2 = new NumeroComplejo(2, 2);

    let operacion = numero1.multiplicacion(numero2);

    expect(operacion.real).toBe(2);
    expect(operacion.imaginario).toBe(6);
  });

  it('La operación (5-3i)/(2+1) dedbe ser igual a 7/5 - 11/5i', () => {
    let numero1 = new NumeroComplejo(5, -3);
    let numero2 = new NumeroComplejo(2, 1);

    let operacion = numero1.division(numero2);

    expect(operacion.real).toBe(1.4);
    expect(operacion.imaginario).toBe(-2.2);
  });

})
