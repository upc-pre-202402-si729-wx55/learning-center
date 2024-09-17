import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  //#region Attributes

  protected invalidPath: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  //#endregion

  //#region Methods

  constructor() {
    this.invalidPath = '';
  }

  ngOnInit(): void {
    this.invalidPath = this.route.snapshot.url.map(url => url.path).join('/');
  }

  protected onNavigateHome() {
    this.router.navigate(['home']).then();
  }

  //#endregion

}
