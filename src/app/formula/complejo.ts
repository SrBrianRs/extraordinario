export class NumeroComplejo {
  real: number;
  imaginario: number;

  constructor(real: number, imaginario: number) {
    this.real = real;
    this.imaginario = imaginario;
  }

  public suma(otroNumero: NumeroComplejo) : NumeroComplejo {
    return new NumeroComplejo(this.real + otroNumero.real, this.imaginario + otroNumero.imaginario);
  }

  public resta(otroNumero: NumeroComplejo) : NumeroComplejo {
    return new NumeroComplejo(this.real - otroNumero.real, this.imaginario - otroNumero.imaginario);
  }

  public multiplicacion(otroNumero: NumeroComplejo) : NumeroComplejo {
    return new NumeroComplejo(this.real * otroNumero.real - this.imaginario * otroNumero.imaginario,
      this.real * otroNumero.imaginario + this.imaginario * otroNumero.real);
  }

  public division(otroNumero: NumeroComplejo) : NumeroComplejo {
    let ac = this.real * otroNumero.real;
    let bd = this.imaginario * otroNumero.imaginario;
    let bc = this.imaginario * otroNumero.real;
    let ad = this.real * otroNumero.imaginario;
    let cc = otroNumero.real * otroNumero.real;
    let dd = otroNumero.imaginario * otroNumero.imaginario;

    return new NumeroComplejo((ac + bd) / (cc + dd), (bc - ad) / (cc + dd));
  }
}
