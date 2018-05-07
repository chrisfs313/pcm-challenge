import { Component, OnInit } from '@angular/core';

import { BackendService } from '../../services/backend.services';
import { LoaderService } from '../../services/loader.services';

import { MenuCategoryVM, IMenuCategory } from '../../models/menuCategoryVM';
import { 
  MenuDishVM, 
  IMenuDish, 
  IMenuDishRemoveResponse,
  IMenuDishSave
} from '../../models/menuDishVM';
import { Constants } from "../../common/constants";

// Declaramos las variables para JQuery
declare var $: any;
// Declaramos las variables para Toastr
declare var toastr: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public static Instance:MenuComponent;

  public _menuDishes: MenuDishVM[] = null;
  private _menuCategories: MenuCategoryVM[] = null;
  private _isCompleted:boolean = false;

  public get GetMenuDishes():any { return this._menuDishes; }
  
  constructor(
    public _backendService: BackendService,
    public _loaderService: LoaderService) { 
      
    MenuComponent.Instance = this;
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
    
  ngOnInit() {
    
  }

  public onCompletedREST():void {
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
              "' class='remove-menu-dish btn btn-outline-dark'>Borrar</button>";
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
      var self = this;
      
      $(document).off().on('click', '.remove-menu-dish', function(e) {
        var idMenuDish = $(this).data('menu-dish-id');
        let menuVM_removed:MenuDishVM = null;
        
        self._loaderService.showLoader();
        self._backendService.removeMenu(idMenuDish)
          .subscribe(data => { 
            
            // Now manually remove the Menu from the list object
            for (var i = 0; i < self.GetMenuDishes.length; i++) {
              var menuDish = self.GetMenuDishes[i];
              
              if (menuDish._id === idMenuDish) {
                menuVM_removed = self.GetMenuDishes[i];
                self.GetMenuDishes.splice(i, 1);
                break;
              }
            } 
            
            self._loaderService.hideLoader();
            // update HTML
            self.onCompletedREST();
            
            // Send toast of confirmation
            toastr.success('Se removio el menu: ' + menuVM_removed.name, 'Cocinero');
        });
      })
    }
  
  private removeBinds():void {
      $(document).off('click', '.remove-menu-dish');
    }

  private addMenu(menuDish: IMenuDishSave):void {
    var self = MenuComponent.Instance;
    self._loaderService.showLoader();
    
    self._backendService.saveMenu(menuDish).subscribe(data => {
        if (data) {
          // Manually add the MenuDish
          let menuDishVM: MenuDishVM = new MenuDishVM(
            data._id, 
            data.name,
            data.description,
            data.price,
            data.imageUrl,
            data.idMenuCategory);
          
          self._menuDishes.push(menuDishVM);
          
          // update HTML
          self.onCompletedREST();
          self._loaderService.hideLoader();
          
          // Send toast of confirmation
          toastr.success('Se guardo el menu: ' + menuDish.name, 'Cocinero');
        }
    });
  }
}
