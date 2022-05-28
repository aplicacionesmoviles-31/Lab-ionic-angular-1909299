import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute, 
    public actionSheetController: ActionSheetController) { }

  ngOnInit(): void {
    this.getAlumnoDetalle(this.matricula);
  }

  alumnos = [
    {
      "nombre": "Vante", 
      "apellido": " Van Ludwig", 
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

  alumnoDetalle: any = {}

  matricula: string = this.ruta.snapshot.params['matricula'];
  getAlumnoDetalle(matricula: string): any {

    for(let i = 0; i < this.alumnos.length; i++){ 
      if(this.alumnos[i].matricula == this.matricula) { 
        this.alumnoDetalle = this.alumnos[i]; 
      }
    }

    return this.alumnoDetalle;
  }

  agregarFavoritos(): void {
  }

  async abrirActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'mi-action-sheet',
      mode: 'ios',
      buttons: [{
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Enviar por correo',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          this.agregarFavoritos();
          //console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
