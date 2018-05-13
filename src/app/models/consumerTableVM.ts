export class ConsumerTableVM {
    constructor(
        public _id: string,
        public name: string,

        public size: number,
        public consumerCount: number,
        public isOccupied: number,
        public idWaiterUser: string) { }
}

export class IConsumerTable {
    _id: string;
    name: string;

    size: number;
    consumerCount: number;
    isOccupied: number;
    idWaiterUser: string;
}

export class ConsumerTableBodyVM {
    idWaiterUser: string;
    consumerMenus: IConsumerTableRequest[];
}

export class IConsumerTableResponse {
    _id: string;
    name: string;
    idBusiness: string;
    idWaiterUser: string;
    consumerCount: number;
    size: number;
    consumerMenus: string[];
}

export class IConsumerTableRequest {
    idConsumerOrder: string;
    idConsumerMenu: string;
    idOrderStatusType: string;
}