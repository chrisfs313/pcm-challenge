import { Component } from '@angular/core';

import { LoaderService } from './services/loader.services';
import { UserClaimService } from './services/user-claim.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
        public userClaimsService: UserClaimService,
        public loaderService: LoaderService) { }
  
  title = 'app';
}
