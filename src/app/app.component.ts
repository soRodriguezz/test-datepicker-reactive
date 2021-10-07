import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-datepicker';

  public subs: Subscription[] = [];

  public fechas: any[] = ['2021-10-04', '2021-10-05', '2021-10-06', '2021-10-07'];

  public today = moment().format("yyyy-MM-DD");
  public fechaUF: string = this.today;

  public valorUF: number = 0;
  // public fechasSeleccionables: Array<moment.Moment> = [];
  
  public fechaMin = moment().subtract(1, 'd').format('YYYY-MM-DD');
  public fechaMax = moment().add(15, 'd').format('YYYY-MM-DD');

  // public mes = moment().format("MM");
  // public ano = moment().format("yyyy");

  public formulario: FormGroup = this._fb.group({
    fechaContrato: [, [Validators.required]],
    uf: [, [Validators.required]]
  });
  // this.today
  
  // 
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    // this.fechaUFSeleccionada();
    console.log(this.formulario);
    // this.formulario.disabled = true;
    // console.log(this.formulario.controls.date.value);
    // console.log(this.today);
    // console.log(this.fechasSeleccionables);
  }
  
  fechaUFSeleccionada() {
    // this.subs.push(
    //   this.formulario.controls.date.value.subscribe(value => {
    //     this.fechaUF = this.formatearFecha(value);
    //     // this.formatearFecha(this.fechaUF);
    //     this.valorUF = 300.32;
    //     console.log("fecha: " + value);
    //     // return console.log(this.fechaUF)
    //   })
    // )
    this.fechaUF = this.formatearFecha(this.formulario.controls.fechaContrato.value);
    
    if(this.fechaUF != 'Invalid date') {
      this.valorUF = 300.32;
      console.log(this.fechaUF);
    }
    
  }
  
  guardar() {
    if(this.formulario.invalid) {
      return;
    }

    console.log( this.fechaUF );
    this.limpiarFormulario();
  }

  formatearFecha( fecha:string ) {
    let fechaParser = moment(fecha).format("DD-MM-YYYY");
    return fechaParser;
  }

  limpiarFormulario() {
    this.formulario.reset();
  }

  ngOnDestroy(): void {
    this.subs.forEach((subscripcion) => subscripcion.unsubscribe());
  }

}



