import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/services/country.service';
import {ThemeService } from './theme/theme.service';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { lightTheme } from './theme/light-theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public countries;
  public country;
  public checkbox;
  faMoon = faMoon;
  public dark = false;
  public theme = 'Dark Mode';

  constructor(private countryService: CountryService, private themeService: ThemeService){

  }

  async ngOnInit() {
    await this.init();
  }

  async init() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.theme = 'Dark Mode';
    } else {
      this.theme = 'Light Mode';
    }
  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
      this.theme = 'Light Mode';
    } else {
      this.themeService.setTheme('light');
      this.theme = 'Dark Mode';
    }
  }

}
