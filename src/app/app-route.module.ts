import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

// création des routes(les differents url ) de l'application (on peut avoir plusieurs)
export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'facesnaps', component:FaceSnapListComponent}     //un objet qui va contenir le chemin et le component 
];

@NgModule({
    imports: [              //importation des routes
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}