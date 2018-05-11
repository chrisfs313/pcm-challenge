import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Constants } from '../common/constants';
import { UserClaimService } from './user-claim.services';

// Modelos para respuesta REST
import { 
    ConsumerTableVM, 
    IConsumerTable, 
    IConsumerTableResponse,
    ConsumerTableBodyVM 
    
} from '../models/consumerTableVM';

import { ConsumerTableOrdersVM, IConsumerTableOrders } from '../models/consumerTableOrdersVM';
import { MenuCategoryVM, IMenuCategory } from '../models/menuCategoryVM';
import { UserVM, IUser } from '../models/userVM';
import { 
    MenuDishVM, 
    IMenuDish, 
    IMenuDishRemoveResponse, 
    IMenuDishSave,
    IMenuDishSaveResponse 
} from '../models/menuDishVM';

// Mappers
import { ConsumerTableMapper } from '../models/mappers/consumerTableMapper';
import { ConsumerTableOrdersMapper } from '../models/mappers/consumerTableOrdersMapper';
import { MenuCategoryMapper } from '../models/mappers/menuCategoryMapper';
import { MenuDishMapper } from '../models/mappers/menuDishMapper';
import { UserMapper } from '../models/mappers/userMapper';

// Declaramos las variables para Toastr
declare var toastr: any;

@Injectable()
export class BackendService {

    constructor(
        private _router: Router,
        private _http: HttpClient,
        private _userClaims: UserClaimService) {
   }

    public listActivesTablesByBusiness(idBusiness: string): Observable<ConsumerTableVM[]> {
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
                    toastr.error('Paso un error inesperado en la carga de Mesas.', 'Error de Servicio!')
                });
        });

        return observer;
    }
    
    public getOrdersByTable(idTable: string): Observable<ConsumerTableOrdersVM> {
        let url: string = Constants.WS_BASE_PATH + Constants.REST_ConsumerTable.GetOrdersByTable +
            idTable;
        
        var observer = new Observable<ConsumerTableOrdersVM>(observer => {
            this._http.get<IConsumerTableOrders>(url).subscribe(
                data => {
                    if (data) {
                        let result: ConsumerTableOrdersVM = ConsumerTableOrdersMapper.IConsumerTableOrdersTo(data);
                        observer.next(result);
                    }
                    else {
                        observer.next(null);
                    }
                    
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado en la carga de Menus.', 'Error de Servicio!')
                });
        });

        return observer;
    }
    
    public getMenuCategories(): Observable<MenuCategoryVM[]> {
        let url: string = Constants.WS_BASE_PATH + Constants.REST_MenuCategory.GetMenuCategories;
        
        var observer = new Observable<MenuCategoryVM[]>(observer => {
            this._http.get<IMenuCategory[]>(url).subscribe(
                data => {
                    let result: MenuCategoryVM[] = MenuCategoryMapper.IMenuCategoryArrayTo(data);
                    
                    observer.next(result);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado en la carga de Categorias de Menus.', 'Error de Servicio!')
                });
        });
        
        return observer;
    }
    
    public getMenuList(): Observable<MenuDishVM[]> {
        let url: string = Constants.WS_BASE_PATH + Constants.REST_MenuDish.GetMenuList;

        var observer = new Observable<MenuDishVM[]>(observer => {
            this._http.get<IMenuDish[]>(url).subscribe(
                data => {
                    let result: MenuDishVM[] = MenuDishMapper.IMenuDishArrayTo(data);
                    
                    observer.next(result);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado en la carga de Categorias de Menus.', 'Error de Servicio!')
                });
        });
        
        return observer;
    }
       
    public setTableOccupied(idConsumerTable: string, isOccupied: boolean, 
        consumerCount: number, dataBody: ConsumerTableBodyVM): Observable<IConsumerTableResponse> {
        
        let url: string = Constants.WS_BASE_PATH + Constants.REST_ConsumerTable.SetTableOccupied +
            idConsumerTable + "/" + (isOccupied === true ? "1" : "0") + "/" + consumerCount;
            
        var observer = new Observable<IConsumerTableResponse>(observer => {
            this._http.post<IConsumerTableResponse>(url, dataBody).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado en la actualizacion de la Mesa.', 'Error de Servicio!');
                    
                    observer.next(null);
                    observer.complete();
                });
        });
        
        return observer;
    }
    
    public freeTable(idConsumerTable: string): Observable<IConsumerTableResponse> {
        let dataBody:ConsumerTableBodyVM = new ConsumerTableBodyVM();
        
        let url: string = Constants.WS_BASE_PATH + Constants.REST_ConsumerTable.SetTableOccupied +
            idConsumerTable + "/0/0";
            
        var observer = new Observable<IConsumerTableResponse>(observer => {
            this._http.post<IConsumerTableResponse>(url, dataBody).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado en la actualizacion de la Mesa.', 'Error de Servicio!');
                    
                    observer.next(null);
                    observer.complete();
                });
        });
        
        return observer;
    }
    
    public removeMenu(idMenu: string): Observable<IMenuDishRemoveResponse> {
        let url: string = Constants.WS_BASE_PATH + Constants.REST_MenuDish.Remove +
            idMenu;
            
        var observer = new Observable<IMenuDishRemoveResponse>(observer => {
            this._http.post<IMenuDishRemoveResponse>(url, {}).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado al borrar el Menu.', 'Error de Servicio!');
                    
                    observer.next(null);
                    observer.complete();
                });
        });
        
        return observer;
    }
    
    public saveMenu(menu: IMenuDishSave): Observable<IMenuDishSaveResponse> {
        let url: string = Constants.WS_BASE_PATH + Constants.REST_MenuDish.Save;
            
        var observer = new Observable<IMenuDishSaveResponse>(observer => {
            this._http.post<IMenuDishSaveResponse>(url, menu).subscribe(
                data => {
                    observer.next(data);
                    observer.complete();
                },
                err => {
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado al guardar el Menu.', 'Error de Servicio!');
                    
                    observer.next(null);
                    observer.complete();
                });
        });
        
        return observer;
    }
    
    public login(dni: string, password: string): Observable<UserVM> {
        let url: string = Constants.WS_BASE_PATH + Constants.REST_User.Login;
        
        var dataBody = {
            "dni": dni,
            "password": password
        };
        
        var observer = new Observable<UserVM>(observer => {
            this._http.post<IUser>(url, dataBody).subscribe(
                data => {
                    let result: UserVM = null;
                    
                    if (data.success === 1) {
                        result = UserMapper.IUserTo(data);
                    }
                    
                    observer.next(result);
                    observer.complete();
                },
                err => {
                    observer.next(null);
                    console.error("Error", err);
                    toastr.error('Paso un error inesperado en el login.', 'Error de Servicio!')
                });
        });
        
        return observer;
    }

    public logout(): void {
        //this._userClaims.clear();
        //this._router.navigate(['/login']);
    }
}