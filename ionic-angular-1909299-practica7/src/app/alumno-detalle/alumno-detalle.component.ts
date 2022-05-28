import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit, OnChanges {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAlumnoDetalle(this.matricula);
  }

  ngOnChanges(): void{
    this.getAlumnoDetalle(this.matricula);
  }

  alumnos=[
    {
      "nombre": "Angel",
      "apellido": "Castro",
      "matricula": "1706445"
    },
    {
      "nombre": "Lalo",
      "apellido": "Salamanca",
      "matricula": "1297505"
    },
    {
      "nombre": "Oscar",
      "apellido": "Uzeta",
      "matricula": "1477311"
    },
    {
        "nombre": "Max",
        "apellido": "Moya",
        "matricula": "1009531"
    },
    {
       "nombre": "Emiliano",
       "apellido": "Silva",
       "matricula": "1773218"
    },
    {
      "nombre": "Daniel",
      "apellido": "Tepezano",
      "matricula": "1153609"
    },
    {
      "nombre": "Jorge",
      "apellido": "Curioso",
      "matricula": "1450325"
    }  
  ]


  alumnoDetalle: any={

  }

  matricula: string=this.ruta.snapshot.params['id'];

  getAlumnoDetalle(matricula: string): any{
    for(let i=0; i<this.alumnos.length; i++){
      if(this.alumnos[i].matricula==this.matricula){
        this.alumnoDetalle=this.alumnos[i];
      }
    }
    return this.alumnoDetalle;
  }

}
