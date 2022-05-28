import { Component, OnInit, Input, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "Vante", 
      "apellido": "Van Ludwig", 
      "matricula": "1753209"
    },
    {
      "nombre": "Luis", 
      "apellido": "Tovar", 
      "matricula": "1984185"
    },
    {
      "nombre": "Emiliano", 
      "apellido": "Eguia", 
      "matricula": "1441180"
    },
    {
      "nombre": "Jason", 
      "apellido": "Brook", 
      "matricula": "1700417"
    },
    {
      "nombre": "Light", 
      "apellido": "Yagami", 
      "matricula": "1215989"
    },
    {
      "nombre": "Hugo", 
      "apellido": "Meza", 
      "matricula": "1623055"
    },
    {
      "nombre": "Saul", 
      "apellido": "Goodman", 
      "matricula": "1572448"
    },
    {
      "nombre": "Lalo", 
      "apellido": "Salamanca", 
      "matricula": "1275918"
    },
    {
      "nombre": "Alex", 
      "apellido": "Moyeda", 
      "matricula": "1583277"
    },
    {
      "nombre": "Roberto", 
      "apellido": "Sandoval", 
      "matricula": "1765983"
    },
    {
      "nombre": "Ricardo", 
      "apellido": "Sarmiento", 
      "matricula": "1106228"
    },
    {
      "nombre": "Frida", 
      "apellido": "Cano", 
      "matricula": "1550128"
    },
    {
      "nombre": "Roger", 
      "apellido": "Castañeda", 
      "matricula": "1274351"
    },
    {
      "nombre": "Walter", 
      "apellido": "White", 
      "matricula": "1853302"
    },
    {
      "nombre": "Hugo", 
      "apellido": "Sanchez", 
      "matricula": "18927563"
    }, 
    {
      "nombre": "Rodrigo", 
      "apellido": "Alvarez", 
      "matricula": "10945234"
    }
  ]

  ngOnInit(): void {
  }


  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";


  hola: string = "hola mundo";

  like(): void {
  
    console.log("like!");
  }

  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "nombre": this.nombreAlumno,
      "apellido": this.apellidoAlumno,
      "matricula": this.matriculaAlumno
    }

    //console.log(nuevoAlumno);

    

    this.alumnos.push(nuevoAlumno); //Funcion en TypeScript 
  }
}
