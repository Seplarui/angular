import { Component } from "angular2/core";
import { PeliculasListComponent } from './components/peliculas-list.component';
import { PeliculasFooterComponent } from './components/peliculas-footer.component';


@Component({

    selector: "my-app",
    templateUrl:"app/view/peliculas.html",
    directives: [PeliculasListComponent, PeliculasFooterComponent]
})

export class AppComponent{
    //PROPIEDADES

    public titulo:string="Películas con Angular 2";
   

    
}