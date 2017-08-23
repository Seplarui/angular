import { Component } from "angular2/core";

@Component({

    selector: "my-app",
    template: `<h1>{{titulo}}
    <ul>
    <li>Título: {{pelicula}}</li>
    <li>Director: {{director}}</li>
    <li>Año: {{anyo}}</li>
    
    </ul>
`
})

export class AppComponent{
    //PROPIEDADES

    public titulo="Películas con Angular 2";
    public pelicula="Batman vs Superman";
    public director= "Zack Scheider";
    public anyo="2016";
}