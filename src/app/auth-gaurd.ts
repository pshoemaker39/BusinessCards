import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthServiceService } from "./auth-service.service";
import { truncate } from "fs";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.auth.getUser().subscribe(user => {
      if (user && user.uid) {
        console.log("UID EXISTS");
        this.router.navigate(["cards"]);
        return true;
      } else {
        console.log("UID DNE");
        this.router.navigate(["home"]);
        return false;
      }
    });
    //return false;
  }
}
