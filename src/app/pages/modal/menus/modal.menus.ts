import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { MenuCategoryVM, IMenuCategory } from '../../../models/menuCategoryVM';
import { MenuDishVM, IMenuDish } from '../../../models/menuDishVM';
import { BackendService } from '../../../services/backend.services';
import { LoaderService } from '../../../services/loader.services';
import { Constants } from '../../../common/constants';

// Declaramos las variables para JQuery
declare var $: any;

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal.menus.html'
})
export class ModalMenus {
  @Input() name;

  private _menuDishes: MenuDishVM[] = null;
  private _menuCategories: MenuCategoryVM[] = null;
  private _isCompleted:boolean = false;

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
      this._loaderService.hideLoader();
      
      var htmlData = "";
      var menuSelector = $('#menu-container-dynamic');
      menuSelector.parent().parent().parent().width(700);
      
      for (var i = 0; i < this._menuCategories.length; i++) {
        var menuCategory = this._menuCategories[i];
        
        htmlData += "<div class='row'>";
        htmlData += "  <div class='col-sm-12'>";
        htmlData += "    <h4>" + menuCategory.name + "</h4>";
        htmlData += "  </div>";
        htmlData += "</div>";
        
        var k = 0;
        var colCount = 0;
        var createRow = true;
        
        while (k < this._menuDishes.length) {
          var menuDish = this._menuDishes[k];
          
          if (menuDish.idMenuCategory === menuCategory._id) {
            if (createRow) {
              htmlData += "<div class='row'>";
            }
            
            htmlData += "  <div class='col-sm-3'>";
            htmlData += "   <div style='height: 60px;'>";
            htmlData += "     " + menuDish.name;
            htmlData += "   </div>";
            htmlData += "   <div style='width: 124px;height: 124px;'>";
            htmlData += "     <img src='" + menuDish.imageUrl + "' width='120' height='120'/>";
            htmlData += "   </div>";
            htmlData += "   <div style='height: 120px;'>";
            htmlData += "     " + menuDish.description;
            htmlData += "   </div>";
            
            htmlData += "   <div>"
            htmlData += "     <button style='margin: auto;width: 100%;' type='button' data-menu-dish-id='" + menuDish._id + 
              "' class='choose-menu-dish btn btn-outline-dark'>Escoger</button>";
            htmlData += "   </div>"
            htmlData += "  </div>";
            
            if (colCount >= 2) {
              colCount = 0;
              createRow = true;
              
              // finished the row tag
              htmlData += "</div>";
            }
            else {
              createRow = false;
              colCount++;
            }
          }
          
          k++;
        }
        
        if (!createRow) {
          htmlData += "</div>";
        }
      }
      
      // now append the HTML composed
      menuSelector.html(htmlData);
      
      // Now bind events of the dynamic buttons
      this.bindEvents();
    }
    
    private bindEvents():void {
      $(document).on('click', '.choose-menu-dish', function(e) {
        console.log("clicked menu:", $(this).data('menu-dish-id'));
      })
    }
}