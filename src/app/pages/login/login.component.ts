import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BackendService } from '../../services/backend.services';
import { LoaderService } from '../../services/loader.services';
import { UserClaimService } from '../../services/user-claim.services';
import { Constants } from "../../common/constants";

// Declaramos las variables para Toastr
declare var toastr: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _dni: string = "";
  private _password: string = "";

  constructor(
    private _router: Router,
    private _backendService: BackendService,
    private _loaderService: LoaderService,
    private _userClaimService: UserClaimService) { }

  ngOnInit() {
  }
  
  private login():void {
    if (this.validate()) {
      this._loaderService.showLoader();
      
      this._backendService.login(this._dni, this._password)
          .subscribe(data => {
            this._userClaimService.setUser(data);
            
            if (data) {
              this._router.navigate(['/home']);
            }
            else {
              toastr.error('El usuario o contraseña son incorrectos.', 'Error de Autenticación');
            }
            
            this._loaderService.hideLoader();
        });
    }
    else {
      toastr.warning('Se requiere todos los campos para poder ingresar.', 'Error de validación');
    }
  }
  
  private validate(): boolean {
    let isValid: boolean = true;

    if (this._dni.length === 0 && this._password.length === 0) {
        isValid = false;
    } 
    
    return isValid;
  }

}
