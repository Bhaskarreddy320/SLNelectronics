import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate{
    
    constructor(private router:Router){

    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let checkinglogin = sessionStorage.getItem('isAdminlogin');
        if(checkinglogin == "true") {
            return true;
        }
        this.router.navigate(['/signin']);
        return  false;
          
    }
}

// export const admin = {
//     isAdminlogin : false

// }