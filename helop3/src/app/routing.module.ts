import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 
const routes:Routes=[{path:'',redirectTo:'/dashboard',pathMatch:'full'},{path:'dashboard',component:DashboardComponent,pathMatch:'full'},
{path:'heroes',component:HeroesComponent},{path:'details/:id',component:HeroDetailsComponent}];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule{}