export class ConsumerMenuVM {
    constructor(
        public _id: string,
        
        public name: string,
        public price: number,
        public imageUrl: string) { }
}

export class IConsumerMenu {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
}
