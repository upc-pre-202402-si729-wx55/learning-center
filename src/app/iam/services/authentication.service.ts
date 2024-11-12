import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";
import {SignInRequest} from "../model/sign-in.request";
import {SignInResponse} from "../model/sign-in.response";

/**
 * Authentication service to sign up, sign in and sign out users.
 * @summary
 * The service uses the HttpClient to send HTTP requests to the server.
 * It handles the responses and errors and updates the signedIn, signedInUserId and signedIndUsername
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  basePath: string = `${environment.serverBasePath}`;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private signedIndUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

  /**
   * Constructor
   * @param router - Router
   * @param http - HttpClient
   */
  constructor(private router: Router, private http: HttpClient) { }

  get isSignedIn() { return this.signedIn.asObservable(); }

  get currentUserId() { return this.signedInUserId.asObservable(); }

  get currentUsername() { return this.signedIndUsername.asObservable(); }

  /**
   * Sign up a new user
   * @summary
   * The method sends a POST request to the server with the sign-up request.
   * It subscribes to the response and error and logs the response or error.
   * @param signUpRequest - The {@link SignUpRequest} object
   */
  signUp(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`,
      signUpRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          console.log(`Signed up as ${response.username} with id ${response.id}`);
          this.router.navigate(['/sign-in']).then();
        },
        error: (error) => {
          console.error(`Error signing up: ${error}`);
          this.router.navigate(['/sign-up']).then();
        }
      })
  }

  /**
   * Sign in a user
   * @summary
   * The method sends a POST request to the server with the sign-in request.
   * It subscribes to the response and error and logs the response or error.
   * @param signInRequest - The {@link SignInRequest} object
   */
  signIn(signInRequest: SignInRequest) {
    console.log(`Signing in as ${signInRequest.username}`);
    return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`,
      signInRequest, this.httpOptions)
      .subscribe({
        next: (response) => {
          this.signedIn.next(true);
          this.signedInUserId.next(response.id);
          this.signedIndUsername.next(response.username);
          localStorage.setItem('token', response.token);
          console.log(`Signed in as ${response.username} with token ${response.token}`);
          this.router.navigate(['/']).then();
        },
        error: (error) => {
          this.signedIn.next(false);
          this.signedInUserId.next(0);
          this.signedIndUsername.next('');
          console.error(`Error while signing in: ${error}`);
          this.router.navigate(['/sign-in']).then();
        }
      });
  }

  /**
   * Sign out the user
   */
  signOut() {
    localStorage.removeItem('token');
    this.signedIn.next(false);
    this.signedInUserId.next(0);
    this.signedIndUsername.next('');
    this.router.navigate(['/sign-in']).then();
  }
}
