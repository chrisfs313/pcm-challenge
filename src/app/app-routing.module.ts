import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

import { AuthGuardService } from './services/auth-guard.services';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    //{ path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //{ path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    HomeComponent
    //,NotFoundComponent
]