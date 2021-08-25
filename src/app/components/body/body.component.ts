import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  comentarios : any[] = [
    {
    nombre:" alexa",
    alias: "jacc",
    comentarios:" hola hola"
  },
  {
    nombre:"luis",
    alias: "luchio",
    comentarios:"fkjsdfdsf"

  },
  {
    nombre:"luz",
    alias: "tatoo",
    comentarios:"jflsakfjsakfjaskf"
  }
];
  nombre: any;
  comentario: any;

  constructor() { }

  ngOnInit(): void {
  }

  addComent(){
    console.log("hola pinchaste en el addcoments");
    console.log(this.nombre +" "+ this.comentario)
    let comentAux ={
      nombre: this.nombre,
      alias: `@ ${this.nombre}`,
      comentario: this.comentario
    }

    this.comentarios.push(comentAux)
  }
  delete(index:any){
    this.comentarios.splice(index,1)

  }

}
