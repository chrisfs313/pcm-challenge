import { Injectable } from "@angular/core"

import { UserVM } from '../models/userVM';

@Injectable()
export class UserClaimService {

    public user: UserVM;
    public isAuthenticated: boolean;

    constructor() {
        this.user = UserVM.Empty;
        this.isAuthenticated = false;
    }

    public clear(): void {
        this.user = UserVM.Empty;
        this.isAuthenticated = false;
    }
    
    public setUser(user: UserVM): void {
        if (user && user.dni.length >= 8) {
            this.user = user;
            this.isAuthenticated = true;
        }
        else {
            this.clear();
        }
    }
}