import { HomeComponent } from './home.component';
import { Utils } from "../../common/utils";

import { MenuDishVM } from '../../models/menuDishVM';
import { ConsumerMenuVM } from "../../models/consumerMenuVM";
import { ConsumerTableVM } from "../../models/consumerTableVM";
import { ConsumerTableOrdersVM } from "../../models/consumerTableOrdersVM";

// Declaramos las variables para Toastr
declare var $: any;

export class TableDetailManager {
    
    public static Instance: TableDetailManager = null;
    
    private _ctx: any;
    private _parentSelector: any;
    private _canvasSelector: any;
    
    private _width: number = 300;
    private _height: number = 600;
    
    private _consumerTable: ConsumerTableVM = null;
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
    
    public removeMenu(idMenu:string): void {
        var data = this.consumerTableOrdersTEMP.consumerMenus;
        
        for (var i = 0; i < data.length; i++) {
            if (data[i]._id === idMenu) {
                data.splice(i, 1);
                break;
            }
        }
    }
    
    public onChooseMenuDish(menuDish: MenuDishVM): void {
        var self = TableDetailManager.Instance;
        
        let consumerMenus:ConsumerMenuVM[] = self.consumerTableOrdersTEMP.consumerMenus;
        let newMenu: ConsumerMenuVM = new ConsumerMenuVM(
            menuDish._id,
            menuDish.name,
            menuDish.price,
            menuDish.imageUrl);
        
        consumerMenus.push(newMenu);
    }
    
    public cancel(): void {
        this.consumerTableOrdersTEMP = Utils.deepClone(this.consumerTableOrders);
    }
    
    public save(): void {
        
    }
    
    public ShowTableDetails(table: ConsumerTableVM): void {
        this._consumerTable = table;
        
        this._homeComponent.GetLoaderService.showLoader();
      
        this._homeComponent.GetBackendService.getOrdersByTable(table._id)
            .subscribe(data => {
                this.consumerTableOrders = data;
                this.consumerTableOrdersTEMP = Utils.deepClone(data);
                
                // Hide loader and show SideBar for Details
                this._homeComponent.GetLoaderService.hideLoader();
                HomeComponent.ShowSideBar();
            });
        
        this.drawTable();
    }
    
    private drawTable(): void {
        var ctx = this._ctx;
        var imgHTML_tables = this._homeComponent.GetHTMLImage_Tables;
        var imgHTML_chair = this._homeComponent.GetHTMLImage_Chair;
        
        // vars
        var ix = 120;
        var iy = 30;
        var offsetX = 15;
        var offsetY = 16;
        var radius = 35;
        var tableSize = this._consumerTable.size;
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
        ctx.strokeText(this._consumerTable.name, 
            ix + imgHTML_tables.width * 0.5, 
            (iy + imgHTML_tables.height * 0.5) + 6);
        
        for (var j = 0; j < tableSize; j++) {
            var cx = (ix + offsetX) + Math.cos(angleFraction * j) * radius;
            var cy = (iy + offsetY) + Math.sin(angleFraction * j) * radius;
            
            // Draw chair: If chair is occupied then make it alpha...
            if (j < this._consumerTable.consumerCount) ctx.globalAlpha = 0.25;
            ctx.drawImage(imgHTML_chair, cx, cy);
            ctx.globalAlpha = 1;
        }
    }
}