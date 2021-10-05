import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-datepicker';

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
    date: [this.today, [Validators.required]],
    uf: []
  });
  
  // 
  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    // this.fechaUFSeleccionada();
    this.fechaUFSeleccionada();
    console.log(this.formulario);
    // this.formulario.disabled = true;
    // console.log(this.formulario.controls.date.value);
    // console.log(this.today);
    // console.log(this.fechasSeleccionables);
  }
  
  fechaUFSeleccionada() {
    this.formulario.controls.date.valueChanges.subscribe(value => {
      this.fechaUF = this.formatearFecha(value);
      // this.formatearFecha(this.fechaUF);
      this.valorUF = 300.32;
      console.log(this.fechaUF);
    });
  }
  
  guardar() {
    if(this.formulario.invalid) {
      return;
    }

    console.log( this.formatearFecha(this.fechaUF) );
    this.formulario.reset();
  }

  formatearFecha (fecha:string) {
    let fechaParser = moment(fecha).format("DD-MM-YYYY"); 
    return fechaParser;
  }

  

}



