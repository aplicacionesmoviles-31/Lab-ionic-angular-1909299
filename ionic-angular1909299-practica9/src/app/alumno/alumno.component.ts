import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre":"Angel",
      "apellido": "Castro",
      "matricula": "1706445"
    },
    {
      "nombre":"Lalo",
      "apellido": "Salamanca",
      "matricula": "1297505"
    },
    {
      "nombre":"Oscar",
      "apellido": "Uzeta",
      "matricula": "1477311"
    },
    {
      "nombre":"Max",
      "apellido": "Moya",
      "matricula": "1009531"
    },
    {
      "nombre":"Emiliano",
      "apellido": "Silva",
      "matricula": "1773218"
    },
    {
      "nombre":"Daniel",
      "apellido": "Tepezano",
      "matricula": "1153609"
    },
    {
      "nombre":"Jorge",
      "apellido": "Curioso",
      "matricula": "1450325"
    }
  ]

  ngOnInit(): void {
  }

  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";
 
  agregarAlumno(): void{
    var nuevoAlumno: any={
      
      "nombre": this.nombreAlumno,
      "apellido": this.apellidoAlumno,
      "matricula": this.matriculaAlumno

    }
    this.alumnos.push(nuevoAlumno); 
  }

}