import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-test';
  theme = '';
  private router: Router;

  constructor(private router: Router) {
    if (localStorage.getItem('selectedTheme') === null) {
      localStorage.setItem('selectedTheme', 'first-theme');
    } else {
      this.theme = localStorage.getItem('selectedTheme');
    }
  }

  changeTheme(theme) {
    this.theme = theme;
    localStorage.setItem('selectedTheme', this.theme);
  }

  changeRoute(route) {
    this.router.navigate([route]);
  }
}
