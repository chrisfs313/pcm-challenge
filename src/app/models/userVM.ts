export class UserVM {
    
    public static readonly Empty: UserVM = new UserVM("", "", "", "", "");
    
    constructor(
        public _id: string,
        public name: string,
        public lastName: string,
        public dni: string,
        public idLaborType: string) { }
}

export class IUser {
    success: number;
    user: {
        _id: string;
        name: string;
        lastName: string;
        dni: string;
        idLaborType: string;
    }
}