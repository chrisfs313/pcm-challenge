import { Component, OnInit } from '@angular/core';

import { BackendService } from '../../services/backend.services';
import { LoaderService } from '../../services/loader.services';
import { UserClaimService } from '../../services/user-claim.services';

import { ConsumerTableVM } from "../../models/consumerTableVM";
import { ConsumerMenuOrderVM, ConsumerMenuVM } from "../../models/consumerMenuVM";
import { Constants } from "../../common/constants";
import { Utils } from "../../common/utils";
import { EnumOrderStatusType } from "../../enums/enumOrderStatusType";

import { TablesManager } from './tablesManager';
import { TableDetailManager } from './tableDetailManager';

import { NgbdModalComponent } from '../modal/modal.component';

// Declaramos las variables para JQuery
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(window:resize)': 'onResizeWindow($event)'
  }
})
export class HomeComponent implements OnInit {

  private _imgChair: any;
  private _imgTables: any;
  
  private _initialized:boolean = false;
  
  private _consumerTables: ConsumerTableVM[];
  
  private _tablesManager: TablesManager;
  private _tableDetailManager: TableDetailManager;
  
  public get GetConsumerTables():ConsumerTableVM[] { return this._consumerTables; }
  
  public get IsInitialized():boolean { return this._initialized; }
  public get GetHTMLImage_Chair():any { return this._imgChair; }
  public get GetHTMLImage_Tables():any { return this._imgTables; }
  
  public get GetBackendService():any { return this._backendService; }
  public get GetLoaderService():any { return this._loaderService; }
  public get GetUserClaimsService():any { return this._userClaimsService; }
  
  public get GetConsumerMenusFromDetails():any { 
    let result: any = null;
    
    result = this._tableDetailManager.consumerTableOrdersTEMP != null 
      ? this._tableDetailManager.consumerTableOrdersTEMP.consumerMenuOrder 
      : null;
    
    if (result && result.length > 0) {
      result = Utils.deepClone(result);
      
      for (var i = 0; i < result.length; i++) {
        if (result[i].idOrderStatusType === EnumOrderStatusType.Borrado) {
          result.splice(i, 1);
          i--;
        }
      }
    }
    
    return result == null ? [] : result; 
  }
  
  public get GetTableTotalPrice():string { 
    let result:any = null;
    let resultTotalPrice: number = 0;
    
    result = this._tableDetailManager.consumerTableOrdersTEMP != null 
      ? this._tableDetailManager.consumerTableOrdersTEMP.consumerMenuOrder 
      : null;
    result = result == null ? [] : result
    
    for (var i = 0; i < result.length; i++) {
      if (result[i].idOrderStatusType !== EnumOrderStatusType.Borrado) {
        resultTotalPrice += result[i].consumerMenu.price;
      }
    }
    
    return resultTotalPrice.toFixed(2); 
  }
  
  public get GetTableDebt():string { 
    let result:any = null;
    let resultTotalPrice: number = 0;
    
    result = this._tableDetailManager.consumerTableOrdersTEMP != null 
      ? this._tableDetailManager.consumerTableOrdersTEMP.consumerMenuOrder 
      : null;
    result = result == null ? [] : result
    
    for (var i = 0; i < result.length; i++) {
      if (result[i].idOrderStatusType !== EnumOrderStatusType.Borrado &&
        result[i].idOrderStatusType !== EnumOrderStatusType.Cancelada) {
        resultTotalPrice += result[i].consumerMenu.price;
      }
    }
    
    return resultTotalPrice.toFixed(2); 
  }

  public get AreAllOrderCanceled():boolean {
    let allCanceled:boolean = false;
    let result:any = null;
    let count:number = 0;

    result = this._tableDetailManager.consumerTableOrdersTEMP != null 
      ? this._tableDetailManager.consumerTableOrdersTEMP.consumerMenuOrder 
      : null;
    result = result == null ? [] : result
    
    for (var i = 0, total = result.length; i < result.length; i++) {
      if (result[i].idOrderStatusType === EnumOrderStatusType.Cancelada) {
        allCanceled = ++count >= total;
      }
      else total++;
    }
    
    return allCanceled;
  }

  constructor(
      private _userClaimsService: UserClaimService,
      private _backendService: BackendService,
      private _loaderService: LoaderService
    ) { 
      
      this._loaderService.showLoader();
      
      this._backendService.listActivesTablesByBusiness(Constants.DefaultIdBusiness)
        .subscribe(data => {
          this._consumerTables = data;
          
          this.onResizeWindow(null);
          this._loaderService.hideLoader();
      });
    }

  ngOnInit() {
    this._initialized = true;
    
    this._imgChair = $("#imgChair")[0];
    this._imgTables = $("#imgTables")[0];
    
    // Initialize Table Manager
    this._tablesManager = new TablesManager(this);
    this._tablesManager.Initialize('#parent-canvas', '#canvas-selector');
    
    // Initialize Table Detail Manager
    this._tableDetailManager = new TableDetailManager(this);
    this._tableDetailManager.Initialize('#parent-detail-canvas', '#canvas-detail-selector');
    
    this.onResizeWindow(null);
    
    setTimeout(function(component) { component.onResizeWindow(null); }, 750, this);
    setTimeout(function(component) { component.onResizeWindow(null); }, 1500, this);
  }
  
  private onMouseDown_TableCanvas(event): void {
    this._tablesManager.OnMouseDown(event);
  }
  
  public onResizeWindow(event): void {
    if (this._tablesManager) this._tablesManager.OnResizeWindow();
  }
  
  public ShowTableDetails(table: ConsumerTableVM): void {
    // Now process Table Details
    this._tableDetailManager.ShowTableDetails(table);
  }
  
  private showModal(): void {
    
  }
  
  private convertOrderStatusToString(idOrderStatusType: string):string {
    let result:string = "";
    
    switch(idOrderStatusType) {
      case EnumOrderStatusType.RecienPedido:
        result = "(Recien Pedido)";
        break;
      case EnumOrderStatusType.Pendiente:
        result = "(En cocina)";
        break;
      case EnumOrderStatusType.ParaEntregar:
        result = "(Para Entregar)";
        break;
      case EnumOrderStatusType.Entregada:
        result = "(En Mesa)";
        break;
      case EnumOrderStatusType.Cancelada:
        result = "(Cobrado)";
        break;
    }
    
    return result;
  }
  
  public static HideSideBar():void {
    $('#sidebar').addClass('active');
  }
  
  public static ShowSideBar(): void {
    $('#sidebar').removeClass('active');
  }
  
  
}
