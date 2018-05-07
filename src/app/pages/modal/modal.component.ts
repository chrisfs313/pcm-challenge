import {Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMenus } from './menus/modal.menus';
import { ModalManageMenu } from './manage-menu/modal.manage-menu';
import { Constants } from "../../common/constants";

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
  
  @Input() modalType;
  
  private _buttonLabel:string = "";
  
  @Input() onCallback: Function;
  
  constructor(private modalService: NgbModal) { }
  
  ngOnInit() {
    switch(this.modalType) {
      case Constants.Modal_Menus:
        this._buttonLabel = "Agregar Plato";
        break;
      case Constants.Modal_ManageMenu:
        this._buttonLabel = "Agregar Plato";
        break;
    }
  }

  openModal() {
    switch(this.modalType) {
      case Constants.Modal_Menus:
        const modalRef_Menus = this.modalService.open(ModalMenus);
        modalRef_Menus.componentInstance.onChooseMenuDishCallback = this.onCallback;
        break;
      case Constants.Modal_ManageMenu:
        const modalRef_ManageMenu = this.modalService.open(ModalManageMenu);
        modalRef_ManageMenu.componentInstance.onManageMenuCallback = this.onCallback;
        break;
    }
  }
}