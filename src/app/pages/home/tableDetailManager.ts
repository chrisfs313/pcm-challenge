import { HomeComponent } from './home.component';
import { Utils } from "../../common/utils";
import { EnumOrderStatusType } from "../../enums/enumOrderStatusType";

import { MenuDishVM } from '../../models/menuDishVM';
import { ConsumerMenuVM, ConsumerMenuOrderVM } from "../../models/consumerMenuVM";
import { ConsumerTableVM, ConsumerTableBodyVM, IConsumerTableRequest } from "../../models/consumerTableVM";
import { ConsumerTableOrdersVM } from "../../models/consumerTableOrdersVM";

// Declaramos las variables para Toastr
declare var $: any;
// Declaramos las variables para Toastr
declare var toastr: any;

export class TableDetailManager {
    
    public static Instance: TableDetailManager = null;
    
    private _ctx: any;
    private _parentSelector: any;
    private _canvasSelector: any;
    
    private _width: number = 360;
    private _height: number = 600;
    
    private _consumerTable: ConsumerTableVM = null;
    public _consumerTableTEMP: ConsumerTableVM = null;
    public consumerTableOrders: ConsumerTableOrdersVM = null;
    public consumerTableOrdersTEMP: ConsumerTableOrdersVM = null;
    
    constructor(
      private _homeComponent: HomeComponent
    ) {
        TableDetailManager.Instance = this;
        
    }
    
    public Initialize(parentId:String, canvasId:String): void {
        this._parentSelector = $(parentId);
        this._canvasSelector = $(canvasId);
        
        this._ctx = this._canvasSelector[0].getContext("2d");

    }
    
    public freeTable(): void {
        this._homeComponent.GetLoaderService.showLoader();
        
        let idConsumerTable: string = this.consumerTableOrdersTEMP._id;
        
        this._homeComponent.GetBackendService.freeTable(idConsumerTable)
            .subscribe(data => {
              
              // Now update consumer table on Home
              let consumerTables:ConsumerTableVM[] = this._homeComponent.GetConsumerTables;
              
              for (var i = 0; i < consumerTables.length; i++) {
                  if (consumerTables[i]._id === idConsumerTable) {
                      consumerTables[i].isOccupied = 0;
                      consumerTables[i].consumerCount = 0;
                      break;
                  }
              }
              
              HomeComponent.HideSideBar(); // remove side bar
              this._homeComponent.onResizeWindow(null);
              this._homeComponent.GetLoaderService.hideLoader();
              
                // Send toast of confirmation
                toastr.success('Se libero la mesa #' + this._consumerTableTEMP.name, 'Mozo')
          });
    }
    
    public isHiddenRemoveButton(idOrderStatusType: string): boolean {
        let isHidden: boolean = true;
        
        if (!this._homeComponent.GetUserClaimsService.isCooker) {
           switch(idOrderStatusType) {
                case EnumOrderStatusType.RecienPedido:
                    isHidden = false;
                    break;
            } 
        }
        
        return isHidden;
    }
    
    public isHiddenStatusChangeButton(idOrderStatusType: string): boolean {
        let isHidden: boolean = true;
        
        if (this._homeComponent.GetUserClaimsService.isCooker) {
            switch(idOrderStatusType) {
                case EnumOrderStatusType.Pendiente:
                    isHidden = false;
                    break;
            }
        }
        else if (this._homeComponent.GetUserClaimsService.isWaiter) {
            switch(idOrderStatusType) {
                case EnumOrderStatusType.ParaEntregar:
                case EnumOrderStatusType.Entregada:
                    isHidden = false;
                    break;
            }
        }
        
        return isHidden;
    }
    
    public getChangeToStatusImgSrc(idOrderStatusType: string): string {
        let result: string = "";
        
        switch(idOrderStatusType) {
            case EnumOrderStatusType.Pendiente:
                result = "assets/icon_pick_food.png";
                break;
            case EnumOrderStatusType.ParaEntregar:
                result = "assets/icon_on_table.png";
                break;
            case EnumOrderStatusType.Entregada:
                result = "assets/icon_pay.png";
                break;
        } 
        
        return result;
    }
    
    public changeStatusTo(menuOrder: ConsumerMenuOrderVM): void {
        let consumerMenuOrders:ConsumerMenuOrderVM[] = this.consumerTableOrdersTEMP.consumerMenuOrder;
        
        switch(menuOrder.idOrderStatusType) {
            case EnumOrderStatusType.Pendiente:
                for (var i = 0; i < consumerMenuOrders.length; i++) {
                    let consumerMenuOrder: ConsumerMenuOrderVM = consumerMenuOrders[i];
                    
                    if (consumerMenuOrder._id == menuOrder._id) {
                        consumerMenuOrder.idOrderStatusType = EnumOrderStatusType.ParaEntregar; 
                        break;
                    }
                }
                break;
            case EnumOrderStatusType.ParaEntregar:
                for (var i = 0; i < consumerMenuOrders.length; i++) {
                    let consumerMenuOrder: ConsumerMenuOrderVM = consumerMenuOrders[i];
                    
                    if (consumerMenuOrder._id == menuOrder._id) {
                        consumerMenuOrder.idOrderStatusType = EnumOrderStatusType.Entregada; 
                        break;
                    }
                }
                break;
            case EnumOrderStatusType.Entregada:
                for (var i = 0; i < consumerMenuOrders.length; i++) {
                    let consumerMenuOrder: ConsumerMenuOrderVM = consumerMenuOrders[i];
                    
                    if (consumerMenuOrder._id == menuOrder._id) {
                        consumerMenuOrder.idOrderStatusType = EnumOrderStatusType.Cancelada; 
                        break;
                    }
                }
                break;
        } 
    }
    
    public removeMenu(idMenuOrder:string): void {
        let consumerMenuOrders:ConsumerMenuOrderVM[] = this.consumerTableOrdersTEMP.consumerMenuOrder;
        
        for (var i = 0; i < consumerMenuOrders.length; i++) {
            let consumerMenuOrder: ConsumerMenuOrderVM = consumerMenuOrders[i];
            
            if (consumerMenuOrder._id == idMenuOrder) {
                switch(consumerMenuOrder.idOrderStatusType) {
                    case EnumOrderStatusType.RecienPedido:
                        consumerMenuOrders.splice(i, 1);
                        break;
                }
                break;
            }
        }
    }
    
    public onChooseMenuDish(menuDish: MenuDishVM): void {
        var self = TableDetailManager.Instance;
        
        let consumerMenuOrders:ConsumerMenuOrderVM[] = self.consumerTableOrdersTEMP.consumerMenuOrder;
        let consumerMenuOrder: ConsumerMenuOrderVM = new ConsumerMenuOrderVM(
            "",
            new ConsumerMenuVM(menuDish._id, menuDish.name, menuDish.price, menuDish.imageUrl),
            EnumOrderStatusType.RecienPedido);
        
        consumerMenuOrders.push(consumerMenuOrder);
    }
    
    public cancel(): void {
        this.consumerTableOrdersTEMP = Utils.deepClone(this.consumerTableOrders);
        this._consumerTableTEMP = Utils.deepClone(this._consumerTable);
    }
    
    public save(): void {
        this._homeComponent.GetLoaderService.showLoader();
        
        let idConsumerTable: string = this.consumerTableOrdersTEMP._id;
        let dataBody: ConsumerTableBodyVM = new ConsumerTableBodyVM();
        dataBody.idWaiterUser = this._homeComponent.GetUserClaimsService.user._id; // set the ID of the current user log in
        dataBody.consumerMenus = [];
            
        for (var i = 0; i < this.consumerTableOrdersTEMP.consumerMenuOrder.length; i++) {
            let reqData: IConsumerTableRequest = new IConsumerTableRequest();
            reqData.idConsumerOrder = this.consumerTableOrdersTEMP.consumerMenuOrder[i]._id;
            reqData.idConsumerMenu = this.consumerTableOrdersTEMP.consumerMenuOrder[i].consumerMenu._id;
            reqData.idOrderStatusType = this.consumerTableOrdersTEMP.consumerMenuOrder[i].idOrderStatusType;
            
            dataBody.consumerMenus.push(reqData);
        }
        
        this._homeComponent.GetBackendService.setTableOccupied(
            idConsumerTable, true, this._consumerTableTEMP.consumerCount, dataBody)
            .subscribe(data => {
              
                // Now update consumer table on Home
                let consumerTables:ConsumerTableVM[] = this._homeComponent.GetConsumerTables;
                
                for (var i = 0; i < consumerTables.length; i++) {
                    if (consumerTables[i]._id === idConsumerTable) {
                        consumerTables[i].isOccupied = 1;
                        consumerTables[i].consumerCount = this._consumerTableTEMP.consumerCount;
                        break;
                    }
                }
              
                this._homeComponent.onResizeWindow(null);
                this._homeComponent.GetLoaderService.hideLoader();
                
                // Send toast of confirmation
                toastr.success('Se actualizo correctamente la mesa #' + 
                    this._consumerTableTEMP.name, 'Mozo')
          });
    }
    
    public ShowTableDetails(table: ConsumerTableVM): void {
        this._consumerTable = table;
        this._consumerTableTEMP = Utils.deepClone(table);
        
        this._homeComponent.GetLoaderService.showLoader();
      
        this._homeComponent.GetBackendService.getOrdersByTable(table._id)
            .subscribe(data => {
                this.consumerTableOrders = data;
                this.consumerTableOrdersTEMP = Utils.deepClone(data);
                
                // Hide loader and show SideBar for Details
                this._homeComponent.GetLoaderService.hideLoader();
                HomeComponent.ShowSideBar();
                
                // Configure spinner for clients
                $("#spinner-clients").spinner({
                    min: 0, 
                    max: this._consumerTableTEMP.size,
                    stop: function(event, ui) {
                        var self = TableDetailManager.Instance;
                        self._consumerTableTEMP.consumerCount = Number($(this).val());
                        self.drawTable();
                    }
                });
                $("#spinner-clients").spinner( "value", this._consumerTableTEMP.consumerCount);
            });
        
        this.drawTable();
    }
    
    public drawTable(): void {
        var ctx = this._ctx;
        var imgHTML_tables = this._homeComponent.GetHTMLImage_Tables;
        var imgHTML_chair = this._homeComponent.GetHTMLImage_Chair;
        
        // vars
        var ix = 80;
        var iy = 30;
        var offsetX = 15;
        var offsetY = 16;
        var radius = 35;
        var tableSize = this._consumerTableTEMP.size;
        var angleFraction = (Math.PI * 2) / tableSize;
        
        // Clean canvas
        ctx.clearRect(0, 0, this._width, this._height);
        // Background
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, this._width, this._height);
        
        // Draw table
        ctx.globalAlpha = 1;
        ctx.drawImage(imgHTML_tables, ix, iy);
        
        // Draw table name
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center"; 
        ctx.strokeText(this._consumerTableTEMP.name, 
            ix + imgHTML_tables.width * 0.5, 
            (iy + imgHTML_tables.height * 0.5) + 6);
        
        for (var j = 0; j < tableSize; j++) {
            var cx = (ix + offsetX) + Math.cos(angleFraction * j) * radius;
            var cy = (iy + offsetY) + Math.sin(angleFraction * j) * radius;
            
            // Draw chair: If chair is occupied then make it alpha...
            if (j < this._consumerTableTEMP.consumerCount) ctx.globalAlpha = 0.25;
            ctx.drawImage(imgHTML_chair, cx, cy);
            ctx.globalAlpha = 1;
        }
    }
}