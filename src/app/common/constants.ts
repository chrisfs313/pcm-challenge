export class ConsumerTableBackend {
    public readonly ListActivesByBusiness: string = "/consumerTable/listActivesByBusiness/";
    public readonly GetOrdersByTable: string = "/consumerTable/getOrdersByTable/";
    public readonly SetTableOccupied: string = "/consumerTable/setTableOccupied/";
}

export class MenuDishBackend {
    public readonly GetMenuList: string = "/menuDish/list/";
    public readonly Remove: string = "/menuDish/remove/";
    public readonly Save: string = "/menuDish/save";
}

export class MenuCategoryBackend {
    public readonly GetMenuCategories: string = "/menuCategory/list";
}

export class UserBackend {
    public readonly Login: string = "/user/login";
}

export class Constants {
    public static readonly DefaultIdBusiness: string = "5a59398eba92390014228220";
    
    // Base URL for REST services
    public static readonly WS_BASE_PATH: string = "https://ws-pcm-challenge.herokuapp.com";
    
    // Backend of all services:
    public static readonly REST_ConsumerTable: ConsumerTableBackend = new ConsumerTableBackend();
    public static readonly REST_MenuDish: MenuDishBackend = new MenuDishBackend();
    public static readonly REST_MenuCategory: MenuCategoryBackend = new MenuCategoryBackend();
    public static readonly REST_User: UserBackend = new UserBackend();

    // Modals
    public static readonly Modal_Menus: string = "menus";
    public static readonly Modal_ManageMenu: string = "manage-menu";
}