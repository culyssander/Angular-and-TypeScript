import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error/Error404Component";
import { NavbarComponent } from "./component/nav-bar/nav-bar.component";


@NgModule({
    declarations:[
        NavbarComponent,
        Error404Component
    ],
    imports:[
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
            }
        ])
    ],
    exports:[
        NavbarComponent
    ]
})
export class CoreModule {

}