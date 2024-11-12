import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {map, take} from "rxjs";

/**
 * Guard to check if user is authenticated
 * @summary
 * This guard is used to check if the user is authenticated.
 * If the user is not authenticated, it will redirect the user to the sign-in page.
 * @param route The route
 * @param state The state
 */
export const authenticationGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  return authenticationService.isSignedIn.pipe(take(1), map(isSignedIn => {
    if (isSignedIn) return true;
    else {
      router.navigate(['/sign-in']).then();
      return false;
    }
  }));
};
