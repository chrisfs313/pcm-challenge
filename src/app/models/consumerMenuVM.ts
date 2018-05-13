export class ConsumerMenuVM {
    constructor(
        public _id: string,
        
        public name: string,
        public price: number,
        public imageUrl: string) { }
}

export class ConsumerMenuOrderVM {
    constructor(
        public _id: string,
        public consumerMenu: ConsumerMenuVM,
        public idOrderStatusType: string) { }
}

export class IConsumerMenu {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
}

export class IConsumerMenuOrder {
    _id: string;
    idMenuDish: IConsumerMenu;
    idOrderStatusType: string;
}