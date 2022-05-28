import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


  //GET
  getAlumnos(){
    return this.http.get('https://practica-9lab-default-rtdb.firebaseio.com/alumnos.json')
  }

  getAlumnoDetalle(id: number ) {
    return this.http.get('https://practica-9lab-default-rtdb.firebaseio.com/alumnos'+ id +'.json')
  }

  //DELETE
  deleteAlumno(id: number){
    return this.http.delete('https://practica-9lab-default-rtdb.firebaseio.com/alumnos'+id+'.json');
  }
  
  
  //UPDATE
  updateAlumno(id:number, alu:any) {
    return this.http.put('https://practica-9lab-default-rtdb.firebaseio.com/alumnos'+id+'.json',alu);
  }

  
}