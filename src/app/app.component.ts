import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-test';
  theme = '';

  constructor() {
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
}
