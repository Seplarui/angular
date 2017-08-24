import { Component } from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({

    selector: "my-app",
    templateUrl:"app/view/peliculas.html",
    styleUrls:["../assets/css/styles.css"]
})

export class AppComponent{
    //PROPIEDADES

    public titulo:string="Películas con Angular 2";
    public pelicula:Pelicula;
    public mostrarDatos: boolean;
    public peliculas;
   
    constructor() {

        this.mostrarDatos=false;

       this.pelicula=new Pelicula(1, "Batman vs Superman", "Zack Sneider", 2016);

       this.peliculas= [
        new Pelicula(1, "Batman vs Superman", "Zack Sneider", 2016),
        new Pelicula(2, "La Verdad Duele", "Zack Sneider", 2006),
        new Pelicula(3, "El señor de los anillos", "Desconocido",2002),
        new Pelicula(4, "Una Historia Real", "El de supersalidos", 2013),
        new Pelicula(5, "Don Jon", "Josep Gordon Levit", 2003)
       ];


       this.debug();
    
    }

    debug(titulo=null) {
        if(titulo!=null) {
            console.log(this.pelicula.titulo);
            

        } else {
            console.log(this.pelicula);
        }
        
    }

    onShowHide(value) {
        this.mostrarDatos=value;
    }

    

    
}