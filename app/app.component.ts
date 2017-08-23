import { Component } from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({

    selector: "my-app",
    templateUrl:"app/view/peliculas.html"
})

export class AppComponent{
    //PROPIEDADES

    public titulo:string="Películas con Angular 2";
    public pelicula:Pelicula;
   
    constructor() {

       this.pelicula=new Pelicula(1, "Batman vs Superman", "Zack Sneider", 2016);
       this.debug();
    
    }

    debug() {
        console.log(this.pelicula);
    }
}