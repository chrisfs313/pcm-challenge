import { ConsumerMenuVM, IConsumerMenu } from "./consumerMenuVM";

export class ConsumerTableOrdersVM {
    constructor(
        public _id: string,
        public name: string,
        public waiterTable: WaiterTableVM,
        public consumerMenus: ConsumerMenuVM[]) { }
}

export class IConsumerTableOrders {
    _id: string;
    name: string;
    consumerMenus: IConsumerMenu[];
    idWaiterUser: IWaiterTable;
}

export class WaiterTableVM {
   constructor(
        public _id: string,
        public fullName: string) { }
}

export class IWaiterTable {
    _id: string;
    name: string;
    lastName: string;
}