import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumeroComplejo } from '../formula/complejo';

@Component({
  selector: 'calculadora-component',
  templateUrl: './calculadora.componet.html',
  styleUrls: ['./calculadora.componet.css']
})

export class CalculadoraComponent implements OnInit{
  calculadoraForm!: FormGroup;
  resultado : any;
  buttonType: string | undefined;

  constructor() { }

  ngOnInit() {
    this.calculadoraForm = new FormGroup({
      real1: new FormControl('', Validators.required),
      img1: new FormControl('', Validators.required),
      real2: new FormControl('', Validators.required),
      img2: new FormControl('', Validators.required)
    });
  }

  onSubmit(buttonType: any): void {
    if(buttonType==="suma") {
        this.suma()
    }
    if(buttonType==="resta") {
      this.resta()
    }
    if(buttonType==="mult") {
      this.multiplicacion()
    }
    if(buttonType==="div") {
      this.division()
    }
  }

  suma(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let resultado : any;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    if (isNaN(real1) || isNaN(real2) || isNaN(img1) || isNaN(img2)){
        resultado = 'No se pueden utilizar letras';
        this.resultado = resultado;
        return resultado;
    }

    operacionComplejo = new NumeroComplejo(real1, img1).suma(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado = '' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }

  resta(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let resultado : any;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    if (isNaN(real1) || isNaN(real2) || isNaN(img1) || isNaN(img2)){
        resultado = 'No se pueden utilizar letras';
        this.resultado = resultado;
        return resultado;
    }

    operacionComplejo = new NumeroComplejo(real1, img1).resta(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado = '' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }

  multiplicacion(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let resultado : any;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    if (isNaN(real1) || isNaN(real2) || isNaN(img1) || isNaN(img2)){
        resultado = 'No se pueden utilizar letras';
        this.resultado = resultado;
        return resultado;
    }

    operacionComplejo = new NumeroComplejo(real1, img1).multiplicacion(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado = '' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }

  division(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let resultado : any;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    if (isNaN(real1) || isNaN(real2) || isNaN(img1) || isNaN(img2)){
        resultado = 'No se pueden utilizar letras';
        this.resultado = resultado;
        return resultado;
    }

    operacionComplejo = new NumeroComplejo(real1, img1).division(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado = '' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }
}
