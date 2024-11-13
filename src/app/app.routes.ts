import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {CourseManagementComponent} from "./learning/pages/course-management/course-management.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {SignInComponent} from "./iam/pages/sign-in/sign-in.component";
import {SignUpComponent} from "./iam/pages/sign-up/sign-up.component";
import {authenticationGuard} from "./iam/services/authentication.guard";

export const routes: Routes = [
  { path: 'home',             component: HomeComponent},
  { path: 'about',            component: AboutComponent},
  { path: 'learning/courses', component: CourseManagementComponent, canActivate: [authenticationGuard]},
  { path: 'sign-in',          component: SignInComponent },
  { path: 'sign-up',          component: SignUpComponent },
  { path: '',                 redirectTo: 'home', pathMatch: 'full'},
  { path: '**',               component: PageNotFoundComponent}
];
