export class MenuDishVM {
    
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public price: number,
        public imageUrl: string,
        public idMenuCategory: string) { }
}

export class IMenuDish {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    idMenuCategory: string;
}

export class IMenuDishSave {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    idMenuCategory: string;
    imageData: string;
    imageMimeType: string;
}

export class IMenuDishRemoveResponse {
    ok: number;
}

export class IMenuDishSaveResponse {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    idMenuCategory: string;
}