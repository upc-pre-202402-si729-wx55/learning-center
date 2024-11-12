import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {MatButton} from "@angular/material/button";

/**
 * Authentication Section Component
 * @summary
 * This component is responsible for displaying the authentication section of the application.
 * It displays the current username and provides the user with the ability to sign in, sign up, or sign out.
 */
@Component({
  selector: 'app-authentication-section',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './authentication-section.component.html',
  styleUrl: './authentication-section.component.css'
})
export class AuthenticationSectionComponent {
  currentUsername: string = '';
  isSignedIn: boolean = false;

  /**
   * Constructor
   * @param router The {@link Router} service
   * @param authenticationService The {@link AuthenticationService} service
   */
  constructor(private router: Router, private authenticationService: AuthenticationService ) {
    this.authenticationService.currentUsername
      .subscribe((username) => this.currentUsername = username);
    this.authenticationService.isSignedIn
      .subscribe((isSignedIn) => this.isSignedIn = isSignedIn);
  }

  /**
   * On Sign In Event Handler
   */
  onSignIn() {
    this.router.navigate(['/sign-in']).then();
  }

  /**
   * On Sign Up Event Handler
   */
  onSignUp() {
    this.router.navigate(['/sign-up']).then();
  }

  /**
   * On Sign Out Event Handler
   */
  onSignOut() {
    this.authenticationService.signOut();
  }

}
