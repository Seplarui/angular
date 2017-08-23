import { Component } from "angular2/core";

@Component({

    selector: "my-app",
    templateUrl:"app/view/peliculas.html"
})

export class AppComponent{
    //PROPIEDADES

    public titulo:string="Películas con Angular 2";
    public pelicula:string="Batman vs Superman";
    public director:string= "Zack Scheider";
    public anyo:number=2016;
}