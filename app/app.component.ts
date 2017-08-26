import { Component } from "angular2/core";
import { PeliculasListComponent } from './components/peliculas-list.component';
import { PeliculasFooterComponent } from './components/peliculas-footer.component';
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import { ContactoComponent } from "./components/contacto.component";
import { CrearPeliculaComponent } from "./components/crear-pelicula.component";

@Component({

    selector: "my-app",
    templateUrl: "app/view/peliculas.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent, ContactoComponent, CrearPeliculaComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([

    { path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true },
    { path: "/crear-pelicula", name: "CrearPelicula", component: CrearPeliculaComponent },
    { path: "/contacto", name: "Contacto", component: ContactoComponent }




])




export class AppComponent {
    //PROPIEDADES

    public titulo: string = "Películas con Angular 2";



}