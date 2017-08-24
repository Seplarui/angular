import { Component } from 'angular2/core';
import { Pelicula } from '../model/pelicula';

@Component({

    selector:"peliculas-list",
    templateUrl:"/app/view/peliculas-list.html",
})

export class PeliculasListComponent {

    public pelicula:Pelicula;
    public peliculaElegida: Pelicula;
    public mostrarDatos: boolean;
    public peliculas;
   
    constructor() {

        this.mostrarDatos=false;
        

       this.peliculas= [
        new Pelicula(1, "Batman vs Superman", "Zack Sneider", 2016),
        new Pelicula(2, "La Verdad Duele", "Zack Sneider", 2006),
        new Pelicula(3, "El señor de los anillos", "Desconocido",2002),
        new Pelicula(4, "Una Historia Real", "El de supersalidos", 2013),
        new Pelicula(5, "Don Jon", "Josep Gordon Levit", 2003)
       ];
       this.peliculaElegida=this.peliculas[0];
       this.pelicula=this.peliculas[0];

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

    onCambiarPelicula(pelicula) {
        this.pelicula=pelicula;
        this.peliculaElegida=pelicula;
    }

    

}