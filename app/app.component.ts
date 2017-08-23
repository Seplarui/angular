import { Component } from "angular2/core";

@Component({

    selector: "my-app",
    templateUrl:"app/view/peliculas.html"
})

export class AppComponent{
    //PROPIEDADES

    public titulo:string="Películas con Angular 2";
    public pelicula:string;
    public director:string;
    public anyo:number;

    constructor() {

        this.pelicula="Batman vs Superman";
        this. director="Zack Scheider";
        this.anyo=2016;
        //this.holaMundo();
    }

    holaMundo() {
        alert("Película: "+this.pelicula+ " - " + this.director + " - " + this.anyo);
    } 
}