import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { MenuCategoryVM, IMenuCategory } from '../../../models/menuCategoryVM';
import { MenuDishVM, IMenuDish, IMenuDishSave } from '../../../models/menuDishVM';
import { BackendService } from '../../../services/backend.services';
import { LoaderService } from '../../../services/loader.services';
import { Constants } from '../../../common/constants';

// Declaramos las variables para JQuery
declare var $: any;

@Component({
  selector: 'ngbd-modal-content-manage-menu',
  templateUrl: './modal.manage-menu.html'
})
export class ModalManageMenu {
  @Input() onManageMenuCallback;

  private _menuDishes: MenuDishVM[] = null;
  private _menuCategories: MenuCategoryVM[] = null;
  private _isCompleted:boolean = false;
  
  private _menuModel: IMenuDishSave = new IMenuDishSave();
  
  constructor(
    public activeModal: NgbActiveModal,
    private _backendService: BackendService,
    private _loaderService: LoaderService) {
      
      this._loaderService.showLoader();
      
      this._backendService.getMenuCategories()
        .subscribe(data => {
          this._menuCategories = data;
          this._isCompleted = this._menuCategories != null && this._menuDishes != null;
          
          if (this._isCompleted) {
            this.onCompletedREST();
          }
      });
      
      this._backendService.getMenuList()
        .subscribe(data => {
          this._menuDishes = data;
          this._isCompleted = this._menuCategories != null && this._menuDishes != null;
          
          if (this._isCompleted) {
            this.onCompletedREST();
          }
      });
    }
    
    private onCompletedREST():void {
      var menuManageForm = $('#menu-manage-form');
      menuManageForm.parent().parent().parent().width(600);
      
      this._loaderService.hideLoader();
    }
    
    private handleFileInput(files: FileList):void {
      var reader = new FileReader();
      reader["Instance"] = this;
      reader.onload = function (event) {
          // Process the data
          var rawDataCode = reader.result;
          var base64Data = rawDataCode.substring(rawDataCode.indexOf("base64,") + 7);
          var mimeType = rawDataCode.substring(rawDataCode.indexOf(':') + 1, rawDataCode.indexOf(';'));
          
          reader["Instance"]._menuModel.imageMimeType = mimeType;
          reader["Instance"]._menuModel.imageData = base64Data; 
          
      }
      reader.readAsDataURL(files.item(0));
    }
    
    private saveMenu():void {
      this.onManageMenuCallback(this._menuModel);
      
      this.activeModal.close('');
    }
}