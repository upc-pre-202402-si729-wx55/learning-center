import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {CourseManagementComponent} from "./learning/pages/course-management/course-management.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'learning/courses', component: CourseManagementComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
