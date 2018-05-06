import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Constants } from '../common/constants';
import { UserClaimService } from './user-claim.services';

// Modelos para respuesta REST
import { ConsumerTableVM, IConsumerTable } from '../models/consumerTableVM';

// Mappers
import { ConsumerTableMapper } from '../models/mappers/consumerTableMapper';

// Declaramos las variables para Toastr
declare var toastr: any;

@Injectable()
export class BackendService {

    constructor(
        private _router: Router,
        private _http: HttpClient,
        private _userClaims: UserClaimService) {
   }

    public listActivesByBusiness(idBusiness: string): Observable<ConsumerTableVM[]> {
        let url: string = Constants.WS_BASE_PATH + Constants.REST_ConsumerTable.ListActivesByBusiness +
            idBusiness;

        var observer = new Observable<ConsumerTableVM[]>(observer => {
            this._http.get<IConsumerTable[]>(url).subscribe(
                data => {
                    let result: ConsumerTableVM[] = ConsumerTableMapper.IConsumerTableArrayTo(data);
                    
                    observer.next(result);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado.', 'Error de Servicio!')
                });
        });

        return observer;
    }

    public logout(): void {
        //this._userClaims.clear();
        //this._router.navigate(['/login']);
    }
}