import {Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMenus } from './menus/modal.menus';
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
        this._buttonLabel = "Agregar Platillo";
        break;
    }
  }

  openModal() {
    switch(this.modalType) {
      case Constants.Modal_Menus:
        const modalRef = this.modalService.open(ModalMenus);
        modalRef.componentInstance.onChooseMenuDishCallback = this.onCallback;
        break;
    }
  }
}