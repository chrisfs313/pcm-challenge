import { Component, OnInit } from '@angular/core';

import { BackendService } from '../../services/backend.services';
import { LoaderService } from '../../services/loader.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private _backendService: BackendService,
      private _loaderService: LoaderService
    ) { 
      
      this._loaderService.showLoader();
      
      this._backendService.listActivesByBusiness("5a59398eba92390014228220")
        .subscribe(data => {
          this._loaderService.hideLoader();
          
      });;
    }

  ngOnInit() {
  }

}
