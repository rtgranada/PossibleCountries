import { Injectable, Inject, EventEmitter } from '@angular/core';
import { THEMES, ACTIVE_THEME, Theme } from './symbols';
import { StorageService } from '../../services/storage.service';

@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string,
    private storageService: StorageService,
  ) {

  }

  getActiveTheme() {
    let localTheme = this.storageService.getItem<String>('theme');
    if(localTheme && localTheme.trim().length > 0) {
      return this.themes.find(t => t.name === localTheme);
    }
    const theme = this.themes.find(t => t.name === this.theme);
    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    return theme;
  }

  setTheme(name: string) {
    this.theme = name;
    this.storageService.setItem<String>('theme', this.theme);
    this.themeChange.emit( this.getActiveTheme());
  }

}
