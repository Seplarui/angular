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
    public nuevaPelicula: Pelicula;


    //METODO

    constructor(private _peliculasService: PeliculasService, private _router: Router, private _routeParams: RouteParams) {


    }

    onSubmit() {




        this._peliculasService.insertPelicula(this.nuevaPelicula);

        this._router.navigate(["Peliculas"]);



    }
    ngOnInit(): any {
        
        this.TituloPelicula = this._routeParams.get("titulo");
        this.nuevaPelicula=new Pelicula(
            0,
            this._routeParams.get("titulo"),
            this._routeParams.get("titulo"),
            parseInt(this._routeParams.get("anio"))
        );

    }

}