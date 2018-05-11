import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuardService } from './services/auth-guard.services';
import { LoaderService } from './services/loader.services';
import { UserClaimService } from './services/user-claim.services';
import { BackendService } from './services/backend.services';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

import { NgbdModalComponent } from './pages/modal/modal.component';
import { ModalMenus } from './pages/modal/menus/modal.menus';
import { ModalManageMenu } from './pages/modal/manage-menu/modal.manage-menu';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    NgbdModalComponent,
    ModalMenus,
    ModalManageMenu,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    UserClaimService,
    LoaderService,
    BackendService
  ],
  entryComponents: [ModalMenus, ModalManageMenu],
  bootstrap: [AppComponent]
})
export class AppModule { }
