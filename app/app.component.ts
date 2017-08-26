import { Component } from "angular2/core";
import { PeliculasListComponent } from './components/peliculas-list.component';
import { PeliculasFooterComponent } from './components/peliculas-footer.component';
import { ROUTER_DIRECTIVES, RouteConfig, Router } from "angular2/router";
import {ContactoComponent} from "./components/contacto.component";

@Component({

    selector: "my-app",
    templateUrl: "app/view/peliculas.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent,ContactoComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([

    {path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true },
    {path: "/contacto", name: "Contacto", component: ContactoComponent }
    

    
])




export class AppComponent {
    //PROPIEDADES

    public titulo: string = "Películas con Angular 2";



}