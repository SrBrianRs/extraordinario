import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NumeroComplejo } from '../formula/complejo';

@Component({
  selector: 'calculadora-component',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
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

  onSubmit(buttonType: any): String {
    if(buttonType==="suma") {
      this.suma();
      return 'suma';
    }
    if(buttonType==="resta") {
      this.resta();
      return 'resta';
    }
    if(buttonType==="mult") {
      this.multiplicacion();
      return 'multiplicacion';
    }
    if(buttonType==="div") {
      this.division();
      return 'division';
    }
    return 'no se pudo realizar'
  }

  suma(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    operacionComplejo = new NumeroComplejo(real1, img1).suma(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado ='' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }

  resta(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    operacionComplejo = new NumeroComplejo(real1, img1).resta(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado = '' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }

  multiplicacion(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    operacionComplejo = new NumeroComplejo(real1, img1).multiplicacion(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado = '' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }

  division(): String {
    let real1 : number; let img1 : number; let real2 : number; let img2 : number;
    let operacionComplejo : any;

    real1 = Number(this.calculadoraForm.value.real1);
    img1 = Number(this.calculadoraForm.value.img1);
    real2 = Number(this.calculadoraForm.value.real2);
    img2 = Number(this.calculadoraForm.value.img2);

    operacionComplejo = new NumeroComplejo(real1, img1).division(new NumeroComplejo(real2, img2));
    if(operacionComplejo.imaginario > 0){
      return this.resultado = '' + operacionComplejo.real + ' + ' + operacionComplejo.imaginario + ' i';
    }
    return this.resultado = '' + operacionComplejo.real + ' ' + operacionComplejo.imaginario + ' i';
  }
}
