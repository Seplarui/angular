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
   
    constructor() {

        this.mostrarDatos=false;

       this.pelicula=new Pelicula(1, "Batman vs Superman", "Zack Sneider", 2016);
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