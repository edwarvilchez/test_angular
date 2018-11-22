import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular CRUD';
  msg:string = '';

  //agregamos el arreglo para la funcionalidad

  employees = [
    {'name': 'Edwar', position: 'Scrum Master', email:'edwar@gmail.com' },
    {'name': 'Angel', position: 'CEO', email:'angel@gmail.com'},
    {'name': 'Morelys', position: 'CFO', email:'morelys@gmail.com' }
  ];

  //declaramos el modelo del data binding
  model:any = {};

  //declaramos el modelo que se usará para almacenar la actualización de los datos
  model2:any = {};

  hideUpdate:boolean = true;

  //agregamos los metodos CRUD
  addEmployee(): void{
    this.employees.push(this.model);
    this.msg = 'Registro Agregado con Éxito';
  }

  deleteEmployee(i): void{
    var respuesta = confirm('Estás Seguro de querer Eliminarlo');
    if(respuesta){
      this.employees.splice(i, 1);
      this.msg = 'Registro Eliminado con Éxito';
    }
  }

  //declaramos una variable global para almacenar los cambios
  myValue;
  editEmployee(i): void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void{
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
      this.employees[i] = this.model2;
      this.msg = 'Registro Actualizado con Éxito';
      this.model2 = {};
      }
    }
  }

  closeAlert(): void{
    this.msg = '';
  }
}
