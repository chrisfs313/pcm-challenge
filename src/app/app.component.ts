import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderService } from './services/loader.services';
import { UserClaimService } from './services/user-claim.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private _router: Router,
    private _userClaimsService: UserClaimService,
    private _loaderService: LoaderService) { }
  
  private logout(): void {
    this._userClaimsService.clear();
    this._router.navigate(['/login']);
  }
}
