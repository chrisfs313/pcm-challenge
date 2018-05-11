import { Injectable } from "@angular/core"

import { UserVM } from '../models/userVM';
import { EnumLaborType } from '../enums/enumLaborType';

@Injectable()
export class UserClaimService {

    public user: UserVM;
    public isAuthenticated: boolean;
    public isWaiter: boolean = false;
    public isCooker: boolean = false;

    constructor() {
        this.user = UserVM.Empty;
        this.isAuthenticated = false;
    }

    public clear(): void {
        this.user = UserVM.Empty;
        this.isAuthenticated = false;
        this.isWaiter = false;
        this.isCooker = false;
    }
    
    public setUser(user: UserVM): void {
        if (user && user.dni.length >= 8) {
            this.user = user;
            this.isAuthenticated = true;
            this.isWaiter = EnumLaborType.Waiter === user.idLaborType;
            this.isCooker = EnumLaborType.Cooker === user.idLaborType;
        }
        else {
            this.clear();
        }
    }
}