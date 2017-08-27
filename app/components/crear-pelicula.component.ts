import { Component, OnInit } from "angular2/core";
import { Pelicula } from "../model/pelicula";
import { PeliculasService } from "../services/peliculas.service";
import { ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams } from "angular2/router";


@Component({

    templateUrl: "app/view/crear-pelicula.html",
    providers: [PeliculasService],
    directives: [ROUTER_DIRECTIVES]
    
})

export class CrearPeliculaComponent implements OnInit {

    public TituloPelicula = "";


    //METODO

    constructor(private _peliculasService: PeliculasService, private _router: Router, private _routeParams: RouteParams) {


    }

    onCrearPelicula(titulo, director, anio) {
        let pelicula: Pelicula = new Pelicula(77, titulo, director, anio);
        this._peliculasService.insertPelicula(pelicula);

        this._router.navigate(["Peliculas"]);



    }
    ngOnInit(): any {
        
        this.TituloPelicula = this._routeParams.get("titulo");

    }

}