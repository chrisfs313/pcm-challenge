import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthGuardService } from './services/auth-guard.services';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'menu', component: MenuComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //{ path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    HomeComponent,
    MenuComponent,
    LoginComponent
    //,NotFoundComponent
]