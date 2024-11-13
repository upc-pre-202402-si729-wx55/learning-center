import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";
import {LanguageSwitcherComponent} from "./public/components/language-switcher/language-switcher.component";
import {AuthenticationSectionComponent} from "./iam/components/authentication-section/authentication-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatAnchor, RouterLink, LanguageSwitcherComponent, AuthenticationSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';
  protected options = [
    { path: '/home', title: 'Home'},
    { path: '/learning/courses', title: 'Courses'},
    { path: '/about', title: 'About'}
  ]
}
