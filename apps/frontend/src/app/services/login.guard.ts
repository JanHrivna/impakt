import { Injectable } from "@angular/core"
import { CanActivate, Router } from "@angular/router"
import { RoutingPathName } from "../app-routing.module"
import { AuthService } from "./auth.service"

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(public router: Router) { }

    canActivate() {
        if (AuthService.isUserLogged()) {
            this.router.navigate(['', RoutingPathName.OVERVIEW])
            return false
        }
        return true
    }
}
