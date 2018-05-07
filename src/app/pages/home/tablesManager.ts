import { HomeComponent } from './home.component';
import { Utils } from "../../common/utils";
import { ConsumerTableVM } from "../../models/consumerTableVM";

// Declaramos las variables para Toastr
declare var $: any;

export class TablesManager {

    private _ctx: any;
    private _parentSelector: any;
    private _canvasSelector: any;
    
    private _width: number;
    private _height: number = 400;
    
    constructor(
      private _homeComponent: HomeComponent
    ) { }
 
    public Initialize(parentId:String, canvasId:String): void {
        this._parentSelector = $(parentId);
        this._canvasSelector = $(canvasId);
        
        this._ctx = this._canvasSelector[0].getContext("2d");
    }  
    
    public OnResizeWindow():void {
        // Update size dynamically
        this._width = this._parentSelector.width();
        
        var ctx = this._ctx;
        
        this._canvasSelector.attr('width', this._width);
        this._canvasSelector.attr('height', this._height);
        
        // Clean
        ctx.clearRect(0, 0, this._width, this._height);
            
        // Background
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, this._width, this._height);
        
        // Draw Tables
        this.onDrawTables();
    }
    
    public OnMouseDown(e):void {
        var mousePos = Utils.getMousePos(this._parentSelector[0], e);
        var tableSelected = false;
        
        if (this._homeComponent.IsInitialized && this._homeComponent.GetConsumerTables != null) {
            var imgHTML_tables = this._homeComponent.GetHTMLImage_Tables;
            var imgHTML_chair = this._homeComponent.GetHTMLImage_Chair;
            
            var ix = 30;
            var iy = 30;
            var offsetX = 15;
            var offsetY = 16;
            var indexX = 0;
            var indexY = 0;
            var indexOffset = 0;
            var tableAreaWidth = (imgHTML_tables.width + (imgHTML_chair.width * 2)) + offsetX;
            var tableAreaHeight = (imgHTML_tables.height + (imgHTML_chair.height * 2)) + offsetY;
            var maxTables = Math.floor(this._width / tableAreaWidth) - 1;
            
            let consumerTables: ConsumerTableVM[] = this._homeComponent.GetConsumerTables;
            
            for (var i = 0; i < consumerTables.length; i++) {
                let ct:ConsumerTableVM = consumerTables[i];
                
                if ((i - indexOffset) > maxTables) {
                  indexOffset += maxTables;
                  indexOffset++;
                  indexY++;
                }
                
                indexX = i - indexOffset;
                
                var tx = (indexX * (imgHTML_tables.width + (imgHTML_chair.width * 2)) + (offsetX * indexX));
                var ty = indexY * tableAreaHeight;
                
                let hitted:boolean = Utils.hitTestByPoint(tx, ty, tableAreaWidth, 
                    tableAreaHeight, mousePos.x, mousePos.y);
                    
                if (hitted) {
                    tableSelected = true;
                    this._homeComponent.ShowTableDetails(ct);
                    break;
                }
            }
            
            if (!tableSelected) {
                HomeComponent.HideSideBar();
            }
        }
    }
    
    public onDrawTables(): void {
        if (this._homeComponent.IsInitialized && this._homeComponent.GetConsumerTables != null) {
            var ctx = this._ctx;
            
            var imgHTML_tables = this._homeComponent.GetHTMLImage_Tables;
            var imgHTML_chair = this._homeComponent.GetHTMLImage_Chair;
            let consumerTables:ConsumerTableVM[] = this._homeComponent.GetConsumerTables;
            
            var ix = 30;
            var iy = 30;
            var offsetX = 15;
            var offsetY = 16;
            var radius = 35;
            var tableAreaWidth = (imgHTML_tables.width + (imgHTML_chair.width * 2)) + offsetX;
            var tableAreaHeight = (imgHTML_tables.height + (imgHTML_chair.height * 2)) + offsetY;
            var maxTables = Math.floor(this._width / tableAreaWidth) - 1;
            
            var indexX = 0;
            var indexY = 0;
            var indexOffset = 0;
            
            for (var i = 0; i < consumerTables.length; i++) {
                let ct:ConsumerTableVM = consumerTables[i];
                let tableSize:number = ct.size;
                let consumers:number = ct.consumerCount;
                var angleFraction = (Math.PI * 2) / tableSize;
                
                if ((i - indexOffset) > maxTables) {
                  indexOffset += maxTables;
                  indexOffset++;
                  indexY++;
                }
                
                indexX = i - indexOffset;
                
                var tx = ix + (indexX * (imgHTML_tables.width + (imgHTML_chair.width * 2)) + (offsetX * indexX));
                var ty = iy + indexY * tableAreaHeight;
                
                // Draw table
                if (ct.isOccupied) ctx.globalAlpha = 0.25; // if the table is occupied then make it alpha
                ctx.drawImage(imgHTML_tables, tx, ty);
                ctx.globalAlpha = 1;
                
                // Draw table name
                ctx.font = "bold 20px Arial";
                ctx.textAlign = "center"; 
                ctx.strokeText(ct.name, 
                    tx + imgHTML_tables.width * 0.5, 
                    (ty + imgHTML_tables.height * 0.5) + 6);
                
                for (var j = 0; j < tableSize; j++) {
                    var cx = (tx + offsetX) + Math.cos(angleFraction * j) * radius;
                    var cy = (ty + offsetY) + Math.sin(angleFraction * j) * radius;
                    
                    // Draw chair
                    if (j < ct.consumerCount) ctx.globalAlpha = 0.25; // if chair is occupied then make it alpha
                    ctx.drawImage(imgHTML_chair, cx, cy);
                    ctx.globalAlpha = 1;
                }
            }
        }
    }
}